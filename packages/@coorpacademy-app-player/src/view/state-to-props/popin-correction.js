import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import isNil from 'lodash/fp/isNil';
import join from 'lodash/fp/join';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {
  getCurrentCorrection,
  getCurrentProgression,
  getCurrentProgressionId,
  getPreviousSlide
} from '../../utils/state-extract';
import {toggleAccordion, selectResource} from '../../actions/ui/corrections';
import {selectProgression} from '../../actions/ui/progressions';

const popinCorrectionStateToProps = ({translate}, {dispatch}) => state => {
  const progressionId = getCurrentProgressionId(state);
  const resetProgression = () => dispatch(selectProgression(progressionId));
  const toggleAccordionSection = sectionId => dispatch(toggleAccordion(sectionId));
  const slide = getPreviousSlide(state);
  const progression = getCurrentProgression(state);
  const accordion = get('ui.corrections.accordion', state);
  const answerResult = getCurrentCorrection(state);
  const correctAnswer = get('correctAnswer', answerResult) || [];
  const corrections = get('corrections', answerResult) || [];
  const isCorrect = isNil(answerResult) ? null : get('state.isCorrect')(progression);
  const isLoading = isNil(isCorrect);

  const buildResourcesView = (_slide, _resourcesToPlay) => {
    const lessons = pipe(
      getOr([], 'lessons'),
      map(lesson => {
        return pipe(
          set('onClick', () => dispatch(_dispatch => _dispatch(selectResource(lesson._id)))),
          set('selected', lesson._id === _resourcesToPlay),
          _lesson => {
            if (_lesson.type === 'pdf') {
              return set('mediaUrl', _lesson.mediaUrl, _lesson);
            }
            return _lesson;
          }
        )(lesson);
      })
    )(_slide);

    const forceSelected = !_resourcesToPlay && !isEmpty(lessons);
    return update('0.selected', selected => forceSelected || selected)(lessons);
  };

  const resourcesToPlay = get('ui.corrections.playResource', state);

  const header = isNil(answerResult)
    ? {}
    : {
        title: translate(isCorrect ? 'Good job' : 'Ouch'),
        subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
        fail: isLoading ? null : !isCorrect,
        lives: progression.state.lives
      };

  const question = {
    header: getOr('', 'question.header', slide),
    answer: translate('Correct answer {{answer}}', {
      answer: join(', ', correctAnswer)
    })
  };

  const resources = buildResourcesView(slide, resourcesToPlay);

  return {
    header: isLoading
      ? {}
      : {
          lives: 1,
          title: '',
          subtitle: '',
          corrections,
          cta: {
            title: translate('Next'),
            onClick: resetProgression
          },
          ...header
        },
    question,
    resources: {
      title: translate('Access the lesson'),
      value: resources,
      open: getOr(false, '0', accordion)
    },
    klf: {
      title: translate('Key point'),
      value: getOr('', 'klf', slide),
      open: getOr(false, '1', accordion)
    },
    tips: {
      title: translate('Did you know that?'),
      value: getOr('', 'tips', slide),
      open: getOr(false, '2', accordion)
    },
    onClick: toggleAccordionSection
  };
};

export default popinCorrectionStateToProps;
