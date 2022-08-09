import React, {useMemo} from 'react';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isNil from 'lodash/fp/isNil';
import Answer from '../../molecule/answer';
import ButtonLink from '../../atom/button-link';
import Provider from '../../atom/provider';
import ReviewCorrectionPopin from '../../molecule/review-correction-popin';
import propTypes from './prop-types';
import style from './style.css';

export const TOTAL_SLIDES_STACK = 5;
export const HIGHEST_INDEX = TOTAL_SLIDES_STACK - 1;

const stylesByPosition = {
  0: style.position0,
  1: style.position1,
  2: style.position2,
  3: style.position3,
  4: style.position4
};

const getSlideAnimation = (action, position, hidden) => {
  switch (action) {
    /* istanbul ignore next */
    case 'unstack':
      return style.slideOutHideAndIn;
    /* istanbul ignore next */
    case 'restack':
      return style.slideOutAndIn;
    default:
      return hidden ? style.hiddenSlide : stylesByPosition[position];
  }
};

const buildCorrectionPopin = (
  isSlideCorrect,
  endReview,
  correctionPopinProps,
  progression,
  updateSlidesOnNext,
  updateStepItemsOnNext,
  updateReviewStatus,
  slideIndex,
  answerUI,
  questionText,
  finishedSlides,
  finishedSlidesSize,
  showCorrectionPopin,
  animateCorrectionPopin
) => {
  if (!showCorrectionPopin) return null;

  const klf = getOr({}, 'klf', correctionPopinProps);
  const information = getOr({label: '', message: ''}, 'information', correctionPopinProps);
  const next = get('next', correctionPopinProps);

  const _correctionPopinProps = {
    next: {
      /*
        next slide action, this will trigger the uiSlides animations
        if it is the last slide AND the content needs to be different, then that update
        of the content will be handled here (and in the validate as it happens normally )
        from the content carried from the validate action.
      */
      onClick: () => {
        // Ce block onClick ne doit pas être côté Redux et juste faire un next.onClick() ?
        const isExitNodePresent = get('state.nextContent.ref', progression) === 'successExitNode';

        updateSlidesOnNext({
          slideIndex,
          newSlideContent: {
            hidden: !!isSlideCorrect,
            position: HIGHEST_INDEX - finishedSlidesSize, // to restack the slide
            animationType: isSlideCorrect ? 'unstack' : 'restack',
            isCorrect: isSlideCorrect,
            endReview: isExitNodePresent,
            answerUI,
            questionText
          },
          numberOfFinishedSlides: finishedSlidesSize
        });
        updateStepItemsOnNext({
          stepIndex: slideIndex,
          finishedSlides,
          current:
            finishedSlidesSize === HIGHEST_INDEX && /* istanbul ignore next */ !isSlideCorrect
        });

        if (finishedSlidesSize === TOTAL_SLIDES_STACK) updateReviewStatus('finished');
      },
      label: next && next.label,
      'data-name': `next-question-button-${slideIndex}`,
      'aria-label': next && next['aria-label']
    },
    klf,
    information,
    type: correctionPopinProps.type,
    resultLabel: correctionPopinProps.resultLabel
  };

  return (
    <div
      className={classnames(
        style.correctionPopinWrapper,
        animateCorrectionPopin ? style.popinAnimation : null
      )}
    >
      <ReviewCorrectionPopin {..._correctionPopinProps} />
    </div>
  );
};

const Slide = ({
  slideIndex,
  uiSlides,
  validate,
  validateSlide,
  finishedSlides, // TODO: pourquoi ce component qui doit afficher la question, doit avir acccès à ça
  finishedSlidesSize, // je ne vois pas ce props dans les fixtures
  updateSlidesOnNext,
  updateReviewStatus,
  updateStepItemsOnNext,
  progression,
  correctionPopinProps
}, context) => {
  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);

  const hidden = getOr(false, `${slideIndex}.hidden`, uiSlides);
  const endReview = getOr(false, `${slideIndex}.endReview`, uiSlides);
  const position = get(`${slideIndex}.position`, uiSlides);
  const animationType = getOr(false, `${slideIndex}.animationType`, uiSlides);
  const animateCorrectionPopin = getOr(false, `${slideIndex}.animateCorrectionPopin`, uiSlides);
  const isSlideCorrect = getOr(null, `${slideIndex}.isCorrect`, uiSlides);
  const showCorrectionPopin = getOr(false, `${slideIndex}.showCorrectionPopin`, uiSlides);
  const questionText = get(`${slideIndex}.questionText`, uiSlides);
  const answerUI = get(`${slideIndex}.answerUI`, uiSlides);

  const validateLabel = getOr('', 'label', validate);
  // debugger;
  const validateButtonProps = {
    customStyle: {
      backgroundColor: primarySkinColor
    },
    /*
      slide validation action, this will trigger the correction popin
      (with the useEffect that fires the dispatchers, if there is a nextContent content,
      it will be loaded here) but will not trigger any animations unless the endReview
      signal is received (all uiSlides will disappear, also fired in a useEffect),

      if it is the last slide and the content needs to be different, then that update will
      be handled on the next slide logic but the content will be carried from here.
    */
    onClick: async () => {
      // endReview based on nextContent ref exit node values: 'successExitNode' : 'failExitNode'
      await validateSlide();
    },
    'aria-label': validateLabel,
    label: validateLabel,
    'data-name': `slide-validate-button-${slideIndex}`,
    className: style.validateButton,
    disabled: !isNil(isSlideCorrect)
  };

  const questionOrigin = 'From "Master Design Thinking to become more agile" course';
  const answerProps = get(['model', 'choices'], answerUI)
    ? /* istanbul ignore next */ {
        ...answerUI,
        model: {
          ...answerUI.model,
          answers: answerUI.model.choices
        }
      }
    : answerUI;

  return (
    <div
      key={`slide-${slideIndex}`}
      data-name={`slide-${slideIndex}`}
      className={classnames(
        style.slideBase,
        getSlideAnimation(animationType, position, hidden),
        endReview ? style.endReview : null
      )}
    >
      {answerUI && questionText ? (
        <div key="content-container" className={style.slideContentContainer}>
          <div key="from-course" className={style.questionOrigin}>
            {questionOrigin}
          </div>
          <div key="title" className={style.question}>
            {questionText}
          </div>
          <div key="help" className={style.help}>
            {
              /* the property with this data from slide is question.explanation ! */ get(
                'help',
                answerUI
              )
            }
          </div>
          <div key="answer-container" className={style.answerContainer}>
            <Answer {...answerProps} key="answer" />
          </div>
        </div>
      ) : null}

      <div key="button-wrapper" className={style.validateButtonWrapper}>
        <ButtonLink {...validateButtonProps} />
      </div>
      {buildCorrectionPopin(
        isSlideCorrect,
        endReview,
        correctionPopinProps,
        progression,
        updateSlidesOnNext,
        updateStepItemsOnNext,
        updateReviewStatus,
        slideIndex,
        answerUI,
        questionText,
        finishedSlides,
        finishedSlidesSize,
        showCorrectionPopin,
        animateCorrectionPopin
      )}
    </div>
  );
};

Slide.propTypes = propTypes;

Slide.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Slide;
