import React, {useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import Answer from '../../molecule/answer';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import ReviewCorrectionPopin from '../../molecule/review-correction-popin';
import Provider, {GetSkinFromContext, GetTranslateFromContext} from '../../atom/provider';
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
  const onClick = get(['next', 'onClick'], correctionPopinProps);

  const _correctionPopinProps = {
    next: {
      onClick,
      label: next && next.label,
      'data-name': `next-question-button-${slideIndex}`,
      'aria-label': next && next['aria-label']
    },
    klf,
    information,
    type: correctionPopinProps.type,
    resultLabel: correctionPopinProps.resultLabel
  };

  // there is an error of eslint here because this useEffect will be only there when the correctionPopin will be there
  // but that is on purpose to go to the next slide if you press enter when the correctionPopin is present
  // istanbul ignore next
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick();
        document.removeEventListener('keydown', keyDownHandler);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
  }, []);

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

const ValidateButton = ({slideIndex, validateButton, primarySkinColor, ariaLabel}) => {
  const {label, onClick, disabled} = validateButton;
  const validateButtonProps = {
    type: 'primary',
    label,
    'aria-label': ariaLabel,
    'data-name': `slide-validate-button-${slideIndex}`,
    onClick,
    disabled,
    className: style.validateButton,
    customStyle: {
      backgroundColor: primarySkinColor
    }
  };

  /* istanbul ignore next */
  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
      }
    };
    if (disabled) document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [disabled]);

  return (
    <div key="button-wrapper" className={style.validateButtonWrapper}>
      <ButtonLink {...validateButtonProps} />
    </div>
  );
};

ValidateButton.propTypes = {
  slideIndex: PropTypes.string,
  validateButton: propTypes.validateButton,
  primarySkinColor: PropTypes.string,
  ariaLabel: PropTypes.string
};

const QuestionContainer = props => {
  const {answerUI, questionText, questionOrigin, disableContent} = props;
  if (!answerUI || !questionText) return null;

  return (
    <div
      key="content-container"
      data-testid="content-container"
      className={classnames(
        style.slideContentContainer,
        disableContent ? style.disabledSlideContent : null
      )}
    >
      <div key="from-course" className={style.questionOrigin}>
        {questionOrigin}
      </div>
      <div
        key="title"
        data-testid="slide-question"
        className={style.question}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: questionText}}
      />
      <div
        key="help"
        className={style.help}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: get('help', answerUI)}}
      />
      <div key="answer-container" className={style.answerContainer}>
        <Answer {...answerUI} key="answer" />
      </div>
    </div>
  );
};

QuestionContainer.propTypes = {
  answerUI: PropTypes.shape(propTypes.slide.answerUI),
  questionText: PropTypes.string,
  questionOrigin: PropTypes.string,
  disableContent: PropTypes.bool
};

const ReviewSlide = (props, legacyContext) => {
  const {slide, validateButton, correctionPopinProps, slideIndex = '0'} = props;

  const skin = GetSkinFromContext();
  const translate = GetTranslateFromContext(legacyContext);

  const validateariaLabel = translate('validateariaLabel');
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);
  const {
    loading,
    loadingAriaLabel,
    parentContentTitle,
    questionText,
    disabledContent,
    answerUI,
    showCorrectionPopin,
    animateCorrectionPopin
  } = slide;

  return (
    <div data-testid="review-slide" className={style.slide}>
      {loading ? (
        <Loader className={style.loader} theme="default" aria-label={loadingAriaLabel} />
      ) : (
        <>
          <QuestionContainer
            questionOrigin={parentContentTitle}
            questionText={questionText}
            answerUI={answerUI}
            disableContent={disabledContent}
            key="question-container"
          />
          <ValidateButton
            slideIndex={slideIndex}
            validateButton={validateButton}
            primarySkinColor={primarySkinColor}
            key="validate-button"
            ariaLabel={validateariaLabel}
          />
          <CorrectionPopin
            correctionPopinProps={correctionPopinProps}
            slideIndex={slideIndex}
            showCorrectionPopin={showCorrectionPopin}
            animateCorrectionPopin={animateCorrectionPopin}
            key="correction-popin"
          />
        </>
      )}
    </div>
  );
};

ReviewSlide.propTypes = propTypes;

ReviewSlide.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

export default ReviewSlide;
