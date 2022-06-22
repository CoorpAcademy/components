import React, {useState, useMemo, useEffect} from 'react';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isNil from 'lodash/fp/isNil';
import {ICON_VALUES} from '../../../atom/review-header-step-item';
import ReviewBackground from '../../../atom/review-background';
import ReviewCongrats from '../../../organism/review-congrats';
import ReviewHeader from '../../../organism/review-header';
import ReviewCorrectionPopin from '../../../molecule/review-correction-popin';
import Answer from '../../../molecule/answer';
import ButtonLink from '../../../atom/button-link';
import style from './style.css';
import {SlidesReviewPropTypes, SlidePropTypes, StackedSlidesPropTypes} from './prop-types';

const stylesByPosition = {
  0: style.position0,
  1: style.position1,
  2: style.position2,
  3: style.position3,
  4: style.position4
};

export const TOTAL_SLIDES_STACK = 5;
export const HIGHEST_INDEX = TOTAL_SLIDES_STACK - 1;

const getSlideAnimation = (action, position, hidden) => {
  switch (action) {
    case 'unstack':
      return style.slideOutHideAndIn;
    case 'restack':
      return style.slideOutAndIn;
    default:
      return hidden ? style.hiddenSlide : stylesByPosition[position];
  }
};

const Slide = ({
  slideNumber,
  slides,
  primarySkinColor,
  validate,
  validateSlide,
  finishedSlides,
  updateSlidesOnValidation,
  updateSlidesOnNext,
  updateReviewStatus,
  updateStepItemsOnValidation,
  updateStepItemsOnNext,
  updateFinishedSlides,
  slideValidationResult,
  correctionPopinProps = {}
}) => {
  const result = get('result', slideValidationResult);
  const exitNode = get('exitNode', slideValidationResult);
  const nextSlide = get('nextSlide', slideValidationResult);
  // const validatedSlideNumber = get('slideNumber', slideValidationResult);

  const {
    hidden,
    endReview,
    position,
    animationType,
    validationResult,
    questionText,
    answerUI
  } = slides.get(slideNumber);

  const {label: validateLabel} = validate;

  const validateButtonProps = {
    customStyle: {
      backgroundColor: primarySkinColor
    },
    /*
      slide validation action, this will trigger the correction popin but will not trigger any
      animations unless the endReview signal is received (all slides will disappear),
      if there is a nextSlide content, it will be loaded here
      if it is the last slide and the content needs to be different, then that update will
      be handled on the next slide logic but the content will be carried from here.
    */
    onClick: async () => {
      // result: 'success' | 'failure'
      // endReview based on nextContent ref exit node values: 'successExitNode' : 'failExitNode'
      await validateSlide();
      updateSlidesOnValidation({
        slideNumber,
        newSlideContent: {
          hidden,
          position,
          validationResult: result,
          endReview: !!exitNode
        },
        numberOfFinishedSlides: finishedSlides.size,
        nextSlide
      });
      updateStepItemsOnValidation({
        stepNumber: slideNumber,
        icon: result === 'success' ? ICON_VALUES.right : ICON_VALUES.wrong
      });
      if (result === 'success') updateFinishedSlides([slideNumber, true]);
      if (endReview) {
        updateReviewStatus('finished');
      }
    },
    'aria-label': validateLabel,
    label: validateLabel,
    'data-name': `slide-validate-button-${slideNumber}`,
    className: style.validateButton,
    disabled: !isNil(validationResult)
  };

  const {
    klf = {},
    information = {label: '', message: ''},
    next,
    successLabel = '',
    failureLabel = ''
  } = correctionPopinProps;

  const _correctionPopinProps = {
    next: {
      /*
        next slide action, this will trigger the slides animations
        if it is the last slide AND the content needs to be different, then that update
        of the content will be handled here (and in the validate as it happens normally )
        from the content carried from the validate action.
      */
      onClick: () => {
        updateSlidesOnNext({
          slideNumber,
          newSlideContent: {
            hidden: validationResult === 'success',
            position: HIGHEST_INDEX - finishedSlides.size,
            animationType: validationResult === 'success' ? 'unstack' : 'restack',
            validationResult,
            endReview: !!exitNode,
            answerUI,
            questionText
          },
          numberOfFinishedSlides: finishedSlides.size
        });
        updateStepItemsOnNext({
          stepNumber: slideNumber,
          finishedSlides,
          current: finishedSlides.size === HIGHEST_INDEX && validationResult !== 'success'
        });
        if (finishedSlides.size === TOTAL_SLIDES_STACK) {
          updateReviewStatus('finished');
        }
      },
      label: next && next.label,
      'data-name': `next-question-button-${slideNumber}`,
      'aria-label': next && next['aria-label']
    },
    klf,
    information,
    type: validationResult === 'success' ? 'right' : 'wrong',
    resultLabel: validationResult === 'success' ? successLabel : failureLabel
  };

  const questionOrigin = 'From "Master Design Thinking to become more agile" course';
  const answerProps = get(['model', 'choices'], answerUI)
    ? {
        ...answerUI,
        model: {
          ...answerUI.model,
          answers: answerUI.model.choices
        }
      }
    : answerUI;

  return (
    <div
      key={`slide-${slideNumber}`}
      data-name={`slide-${slideNumber}`}
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
            {answerUI.help}
          </div>
          <div key="answer-container" className={style.answerContainer}>
            <Answer {...answerProps} key="answer" />
          </div>
        </div>
      ) : null}

      <div key="button-wrapper" className={style.validateButtonWrapper}>
        <ButtonLink {...validateButtonProps} />
      </div>
      <div
        className={
          validationResult ? style.correctionPopinWrapper : style.hiddenCorrectionPopinWrapper
        }
        style={{
          ...(finishedSlides.size !== HIGHEST_INDEX &&
            !validationResult && {
              display: 'none'
            })
        }}
      >
        <ReviewCorrectionPopin {..._correctionPopinProps} />
      </div>
    </div>
  );
};

Slide.propTypes = SlidePropTypes;

const StackedSlides = ({
  slides,
  primarySkinColor,
  validate,
  validateSlide,
  finishedSlides,
  updateSlidesOnValidation,
  updateSlidesOnNext,
  updateReviewStatus,
  updateStepItemsOnValidation,
  updateStepItemsOnNext,
  updateFinishedSlides,
  slideValidationResult,
  correctionPopinProps
}) => {
  const stackedSlides = [];
  // eslint-disable-next-line fp/no-loops
  for (let slideNumber = 0; slideNumber < TOTAL_SLIDES_STACK; slideNumber++) {
    const slide = (
      <Slide
        {...{
          slideNumber,
          slides,
          primarySkinColor,
          validate,
          validateSlide,
          finishedSlides,
          updateSlidesOnValidation,
          updateSlidesOnNext,
          updateReviewStatus,
          updateStepItemsOnValidation,
          updateStepItemsOnNext,
          updateFinishedSlides,
          slideValidationResult,
          correctionPopinProps
        }}
        key={slideNumber}
      />
    );
    stackedSlides.push(slide);
  }

  return stackedSlides;
};

StackedSlides.propTypes = StackedSlidesPropTypes;

const SlidesReview = (
  {
    headerProps,
    reviewBackgroundAriaLabel,
    validate,
    correctionPopinProps,
    slides,
    finishedSlides,
    stepItems,
    reviewStatus,
    congratsProps,
    validateSlide,
    updateSlidesOnValidation,
    updateSlidesOnNext,
    updateReviewStatus,
    updateStepItemsOnValidation,
    updateStepItemsOnNext,
    updateFinishedSlides,
    slideValidationResult = {}
  },
  context
) => {
  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);

  /*
    ||-------> the slides have an slightly longer lifespan than the "ongoing" review State,
    after reviewState changes to "finished" the slides don't have to unmount until the last
    slide-out animation is finished, the slides have to be unmounted to be RGAA complaint
    (if they are only invisible but still mounted, then they will be found the assisting tools & clutter it)
  */
  const [shouldMountSlides, updateShouldMountSlides] = useState(true);

  useEffect(() => {
    if (reviewStatus === 'finished' || finishedSlides.size === TOTAL_SLIDES_STACK) {
      setTimeout(() => updateShouldMountSlides(false), 2000);
    }
  }, [finishedSlides.size, reviewStatus, updateReviewStatus]);

  // ||-------> transform the step items state (Map structure) to an Array
  const stepItemsArray = useMemo(() => {
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(stepItems.values());
  }, [stepItems]);

  const _headerProps = {
    ...headerProps,
    steps: stepItemsArray,
    key: 'review-header',
    hiddenSteps: reviewStatus !== 'ongoing'
  };

  return (
    <div
      key="slides-revision-container"
      data-name="slides-revision-container"
      className={style.slidesRevisionContainer}
    >
      <div key="player-background-container" className={style.playerBackground}>
        <ReviewBackground aria-label={reviewBackgroundAriaLabel} />
      </div>

      <div key="review-header-wrapper" className={style.reviewHeaderContainer}>
        <ReviewHeader {..._headerProps} />
      </div>

      {shouldMountSlides ? (
        <div
          key="stacked-slides-container-y-overflow"
          className={style.stackedSlidesYAxisOverflowContainer}
        >
          <div
            key="stacked-slides-container"
            data-name="stacked-slides-container"
            className={style.stackedSlidesContainer}
          >
            <StackedSlides
              {...{
                slides,
                primarySkinColor,
                validate,
                validateSlide,
                finishedSlides,
                updateSlidesOnValidation,
                updateSlidesOnNext,
                updateReviewStatus,
                updateStepItemsOnValidation,
                updateStepItemsOnNext,
                updateFinishedSlides,
                slideValidationResult,
                correctionPopinProps
              }}
            />
          </div>
        </div>
      ) : null}

      {reviewStatus === 'finished' ? (
        <div className={style.congrats}>
          <ReviewCongrats {...congratsProps} />
        </div>
      ) : null}
    </div>
  );
};

SlidesReview.propTypes = SlidesReviewPropTypes;

export default SlidesReview;
