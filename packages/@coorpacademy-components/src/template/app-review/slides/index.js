import React, {useState, useMemo, useEffect} from 'react';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import size from 'lodash/fp/size';
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

const Slide = ({
  slideNumber,
  slides,
  primarySkinColor,
  validate,
  validateSlide,
  finishedSlides,
  finishedSlidesSize,
  updateSlidesOnNext,
  updateReviewStatus,
  updateStepItemsOnNext,
  progression,
  correctionPopinProps
}) => {
  const hidden = getOr(false, `${slideNumber}.hidden`, slides);
  const endReview = getOr(false, `${slideNumber}.endReview`, slides);
  const position = get(`${slideNumber}.position`, slides);
  const animationType = getOr(false, `${slideNumber}.animationType`, slides);
  const isSlideCorrect = getOr(null, `${slideNumber}.isCorrect`, slides);
  const questionText = get(`${slideNumber}.questionText`, slides);
  const answerUI = get(`${slideNumber}.answerUI`, slides);

  const validateLabel = getOr('', 'label', validate);

  const validateButtonProps = {
    customStyle: {
      backgroundColor: primarySkinColor
    },
    /*
      slide validation action, this will trigger the correction popin
      (with the useEffect that fires the dispatchers, if there is a nextSlide content,
      it will be loaded here) but will not trigger any animations unless the endReview
      signal is received (all slides will disappear, also fired in a useEffect),

      if it is the last slide and the content needs to be different, then that update will
      be handled on the next slide logic but the content will be carried from here.
    */
    onClick: async () => {
      // endReview based on nextContent ref exit node values: 'successExitNode' : 'failExitNode'
      await validateSlide();
    },
    'aria-label': validateLabel,
    label: validateLabel,
    'data-name': `slide-validate-button-${slideNumber}`,
    className: style.validateButton,
    disabled: !isNil(isSlideCorrect)
  };

  const klf = getOr({}, 'klf', correctionPopinProps);
  const information = getOr({label: '', message: ''}, 'information', correctionPopinProps);
  const next = get('next', correctionPopinProps);
  const successLabel = getOr('', 'successLabel', correctionPopinProps);
  const failureLabel = getOr('', 'failureLabel', correctionPopinProps);

  const _correctionPopinProps = {
    next: {
      /*
        next slide action, this will trigger the slides animations
        if it is the last slide AND the content needs to be different, then that update
        of the content will be handled here (and in the validate as it happens normally )
        from the content carried from the validate action.
      */
      onClick: () => {
        const exitNode = get('exitNode', progression);

        updateSlidesOnNext({
          slideNumber,
          newSlideContent: {
            hidden: !!isSlideCorrect,
            position: HIGHEST_INDEX - finishedSlidesSize, // to restack the slide
            animationType: isSlideCorrect ? 'unstack' : 'restack',
            isCorrect: isSlideCorrect,
            endReview: !!exitNode,
            answerUI,
            questionText
          },
          numberOfFinishedSlides: finishedSlidesSize
        });
        updateStepItemsOnNext({
          stepNumber: slideNumber,
          finishedSlides,
          current:
            finishedSlidesSize === HIGHEST_INDEX && /* istanbul ignore next */ !isSlideCorrect
        });

        if (finishedSlidesSize === TOTAL_SLIDES_STACK) updateReviewStatus('finished');
      },
      label: next && next.label,
      'data-name': `next-question-button-${slideNumber}`,
      'aria-label': next && next['aria-label']
    },
    klf,
    information,
    type: isSlideCorrect ? 'right' : 'wrong',
    resultLabel: isSlideCorrect ? successLabel : failureLabel
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
          isSlideCorrect ? style.correctionPopinWrapper : style.hiddenCorrectionPopinWrapper
        }
        style={{
          ...(finishedSlidesSize !== HIGHEST_INDEX &&
            !isSlideCorrect && {
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
  finishedSlidesSize,
  updateSlidesOnNext,
  updateReviewStatus,
  updateStepItemsOnNext,
  progression,
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
          finishedSlidesSize,
          updateSlidesOnNext,
          updateReviewStatus,
          updateStepItemsOnNext,
          progression,
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
    progression
  },
  context
) => {
  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);

  const finishedSlidesSize = useMemo(() => pipe(omit('slideNumbers'), size)(finishedSlides), [
    finishedSlides
  ]);

  /*
    ||-------> the slides have an slightly longer lifespan than the "ongoing" review State,
    after reviewState changes to "finished" the slides don't have to unmount until the last
    slide-out animation is finished, the slides have to be unmounted to be RGAA complaint.
    (if they are only invisible -but- still mounted, then they will be found by the assisting
    tools & clutter them)
  */
  const [shouldMountSlides, updateShouldMountSlides] = useState(true);

  useEffect(
    /* istanbul ignore next */ () => {
      const slideNumber = get('slideNumber', progression);
      if (progression) {
        const hidden = getOr(false, `${slideNumber}.hidden`, slides);
        const endReview = getOr(false, `${slideNumber}.endReview`, slides);
        const position = get(`${slideNumber}.position`, slides);
        const isCorrect = get('isCorrect', progression);
        const exitNode = get('exitNode', progression);
        const nextSlide = get('nextSlide', progression);
        updateSlidesOnValidation({
          slideNumber,
          newSlideContent: {
            hidden,
            position,
            isCorrect,
            endReview: !!exitNode
          },
          numberOfFinishedSlides: finishedSlidesSize,
          nextSlide
        });
        updateStepItemsOnValidation({
          stepNumber: slideNumber,
          icon: isCorrect ? ICON_VALUES.right : ICON_VALUES.wrong
        });
        if (isCorrect) updateFinishedSlides({slideNumber, value: true});
        if (endReview) {
          updateReviewStatus('finished');
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progression]
  );

  useEffect(
    /* istanbul ignore next */ () => {
      if (reviewStatus === 'finished') {
        setTimeout(() => updateShouldMountSlides(false), 2000);
      }
    },
    [finishedSlidesSize, reviewStatus, updateReviewStatus]
  );

  // ||-------> transform the step items state to Array
  const stepItemsArray = useMemo(
    () =>
      pipe(
        omit('slideNumbers'),
        map(stepItem => stepItem)
      )(stepItems),
    [stepItems]
  );

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
                finishedSlidesSize,
                updateSlidesOnNext,
                updateReviewStatus,
                updateStepItemsOnNext,
                progression,
                correctionPopinProps
              }}
            />
          </div>
        </div>
      ) : /* istanbul ignore next */ null}

      {reviewStatus === 'finished' ? (
        <div className={style.congrats} data-name="congrats-container">
          <ReviewCongrats {...congratsProps} />
        </div>
      ) : null}
    </div>
  );
};

SlidesReview.propTypes = SlidesReviewPropTypes;

export default SlidesReview;
