import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import Answer from '../../molecule/answer';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import ReviewCorrectionPopin from '../../molecule/review-correction-popin';
import {useWebContext} from '../../atom/web-context';
import propTypes from './prop-types';
import style from './style.css';

const CorrectionPopin = ({
  correctionPopinProps,
  slideIndex,
  showCorrectionPopin,
  animateCorrectionPopin
}) => {
  if (!showCorrectionPopin) return null;

  const klf = getOr({}, 'klf', correctionPopinProps);
  const information = getOr({label: '', message: ''}, 'information', correctionPopinProps);
  const next = get('next', correctionPopinProps);

  const _correctionPopinProps = {
    next: {
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Next Slide');
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

CorrectionPopin.propTypes = {
  slideIndex: PropTypes.string,
  showCorrectionPopin: PropTypes.bool,
  animateCorrectionPopin: PropTypes.bool,
  correctionPopinProps: propTypes.correctionPopinProps
};

const ValidateButton = ({slideIndex, validateButton, primarySkinColor}) => {
  const {label, onClick, disabled} = validateButton;
  const validateButtonProps = {
    type: 'primary',
    label,
    'aria-label': label,
    'data-name': `slide-validate-button-${slideIndex}`,
    onClick,
    disabled,
    className: style.validateButton,
    customStyle: {
      backgroundColor: primarySkinColor
    }
    /*
      slide validation action, this will trigger the correction popin
      (with the useEffect that fires the dispatchers, if there is a nextContent content,
      it will be loaded here) but will not trigger any animations unless the endReview
      signal is received (all slide will disappear, also fired in a useEffect),

      if it is the last slide and the content needs to be different, then that update will
      be handled on the next slide logic but the content will be carried from here.
    onClick: async () => {
      // endReview based on nextContent ref exit node values: 'successExitNode' : 'failExitNode'
      await validateSlide();
    },
    */
  };

  return (
    <div key="button-wrapper" className={style.validateButtonWrapper}>
      <ButtonLink {...validateButtonProps} />
    </div>
  );
};

ValidateButton.propTypes = {
  slideIndex: PropTypes.string,
  validateButton: propTypes.validateButton,
  primarySkinColor: PropTypes.string
};

const QuestionContainer = props => {
  const {answerUI, questionText, questionOrigin} = props;
  if (!answerUI || !questionText) return null;

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
    <div key="content-container" className={style.slideContentContainer}>
      <div key="from-course" className={style.questionOrigin}>
        {questionOrigin}
      </div>
      <div key="title" className={style.question}>
        {questionText}
      </div>
      <div key="help" className={style.help}>
        {get('help', answerUI)}
      </div>
      <div key="answer-container" className={style.answerContainer}>
        <Answer {...answerProps} key="answer" />
      </div>
    </div>
  );
};

QuestionContainer.propTypes = {
  answerUI: PropTypes.shape(propTypes.slide.answerUI),
  questionText: PropTypes.string,
  questionOrigin: PropTypes.string
};

const ReviewSlide = props => {
  const {slide, validateButton, correctionPopinProps, slideIndex = '0'} = props;

  const context = useWebContext(); // mais comment faire pour le mobile ?
  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);
  const {
    loading,
    loadingAriaLabel,
    parentContentTitle,
    questionText,
    answerUI,
    showCorrectionPopin,
    animateCorrectionPopin
  } = slide;

  return (
    <div data-name={`slide-container`} className={style.slide}>
      {loading ? (
        <Loader className={style.loader} theme="default" aria-label={loadingAriaLabel} />
      ) : (
        [
          <QuestionContainer
            questionOrigin={parentContentTitle}
            questionText={questionText}
            answerUI={answerUI}
            key="question-container"
          />,
          <ValidateButton
            slideIndex={slideIndex}
            validateButton={validateButton}
            primarySkinColor={primarySkinColor}
            key="validate-button"
          />,
          <CorrectionPopin
            correctionPopinProps={correctionPopinProps}
            slideIndex={slideIndex}
            showCorrectionPopin={showCorrectionPopin}
            animateCorrectionPopin={animateCorrectionPopin}
            key="correction-popin"
          />
        ]
      )}
    </div>
  );
};

ReviewSlide.propTypes = propTypes;

export default ReviewSlide;
