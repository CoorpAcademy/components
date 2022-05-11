import React, {useState, useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import omit from 'lodash/fp/omit';
import isNil from 'lodash/fp/isNil';
import ReviewBackground from '../../atom/review-background';
import {ICON_VALUES} from '../../atom/review-header-step-item';
import ReviewHeader from '../../organism/review-header';
import ReviewCorrectionPopin from '../../molecule/review-correction-popin';
import Answer from '../../molecule/answer';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const stylesByPosition = {
  0: style.position0,
  1: style.position1,
  2: style.position2,
  3: style.position3,
  4: style.position4
};

const TOTAL_SLIDES_STACK = 5;
const HIGHEST_INDEX = TOTAL_SLIDES_STACK - 1;

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

const buildSlide = (
  slideNumber,
  slidesState,
  updateSlides,
  primarySkinColor,
  validate,
  correctionPopinProps,
  updateStepItems,
  finishedSlides,
  updateFinishedSlides,
  updateReviewState
) => {
  const {hidden, endReview, position, action, validationResult, question, answer} = slidesState.get(
    slideNumber
  );
  const {onClick: onValidateClick, label: validateLabel} = validate;

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
      const {validationResult: result, nextSlide, endReview: _endReview} = await onValidateClick();
      updateSlides([
        slideNumber,
        {
          hidden,
          position,
          validationResult: result,
          answer,
          question,
          nextSlide,
          numberOfFinishedSlides: finishedSlides.size,
          endReview: _endReview
        }
      ]);
      // on endReview, this gives some time for the slides to slide out && then launch
      // the 'finished' logic as it would happen when normally finishing the review
      if (_endReview) setTimeout(() => updateReviewState('finished'), 2000);
      updateStepItems([
        slideNumber,
        {
          icon: result === 'success' ? ICON_VALUES.right : ICON_VALUES.wrong,
          finishedSlides
        }
      ]);
      // only stores successful slides
      if (result === 'success') updateFinishedSlides([slideNumber, true]);
    },
    'aria-label': validateLabel,
    label: validateLabel,
    'data-name': `slide-validate-button-${slideNumber}`,
    className: style.validateButton,
    disabled: !isNil(validationResult)
  };

  const {klf, information, next, successLabel, failureLabel} = correctionPopinProps;

  const _correctionPopinProps = {
    next: {
      /* 
        next slide action, this will trigger the slides animations
        if it is the last slide AND the content needs to be different, then that update
        of the content will be handled here (and in the validate as it happens normally )
        from the content carried from the validate action.
      */
      onClick: () => {
        updateSlides([
          slideNumber,
          {
            hidden: validationResult === 'success',
            position: HIGHEST_INDEX - finishedSlides.size,
            action: validationResult === 'success' ? 'unstack' : 'restack',
            answer,
            question,
            validationResult,
            numberOfFinishedSlides: finishedSlides.size,
            endReview
          }
        ]);
        updateStepItems([
          slideNumber,
          {
            setNext: true,
            finishedSlides,
            current: finishedSlides.size === HIGHEST_INDEX && validationResult !== 'success'
          }
        ]);
        // if slides are successfully reviewed, then trigger the 'finished' state
        if (finishedSlides.size === TOTAL_SLIDES_STACK)
          setTimeout(() => updateReviewState('finished'), 2000);
      },
      label: next.label,
      'data-name': `next-question-button-${slideNumber}`,
      'aria-label': next['aria-label']
    },
    klf,
    information,
    type: validationResult === 'success' ? 'right' : 'wrong',
    resultLabel: validationResult === 'success' ? successLabel : failureLabel
  };

  const questionOrigin = 'From "Master Design Thinking to become more agile" course';

  return (
    <div
      key={`slide-${slideNumber}`}
      data-name={`slide-${slideNumber}`}
      className={classnames(
        style.slideBase,
        getSlideAnimation(action, position, hidden),
        endReview ? style.endReview : null
      )}
    >
      {answer && question ? (
        <div key="content-container" className={style.slideContentContainer}>
          <div key="from-course" className={style.questionOrigin}>
            {questionOrigin}
          </div>
          <div key="title" className={style.question}>
            {question}
          </div>
          <div key="help" className={style.help}>
            {answer.help}
          </div>
          <div key="answer-container" className={style.answerContainer}>
            <Answer {...answer} key="answer" />
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

// ||-------> Handles the updates of a given slide (using the 'id' in the action),
// & then updates de remaining slides if this given change should impact their content
const slidesStateReducer = (state, action) => {
  const [id, value] = action;
  const _state = new Map();

  const {nextSlide, numberOfFinishedSlides, ...newValue} = value;

  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    if (index === id) {
      // update the given slide
      if (nextSlide && numberOfFinishedSlides === HIGHEST_INDEX) {
        _state.set(index, {
          ...previousValue,
          nextSlide,
          position: newValue.position,
          validationResult: newValue.validationResult
        });
      } else if (numberOfFinishedSlides === HIGHEST_INDEX && previousValue.nextSlide) {
        _state.set(index, {...previousValue.nextSlide, position: previousValue.position});
      } else _state.set(id, newValue);
    } else {
      // updates the rest of the slides here
      const {hidden, position, answer, question} = previousValue;
      if (nextSlide) {
        _state.set(index, {...nextSlide, endReview: newValue.endReview, hidden, position});
      } else {
        _state.set(index, {
          hidden,
          position: position - 1,
          answer,
          question,
          endReview: newValue.endReview
        });
      }
    }
  }

  return _state;
};

// ||-------> aux function, finds the consecutive index to loop from 0 to HIGHEST_INDEX (4) & again to 0
const getNextIndex = currentIndex => (currentIndex === HIGHEST_INDEX ? 0 : currentIndex + 1);

// ||-------> calculates which should be the next step to visit (as there can be already answered slides &&
// they have to be skipped)
const calculateNextStepIndex = (currentSlideIndex, finishedSlides, lastVisitedIndex = null) => {
  // only one slide remaining
  if (lastVisitedIndex === currentSlideIndex) {
    return currentSlideIndex;
  }

  const indexToVisit = getNextIndex(isNil(lastVisitedIndex) ? currentSlideIndex : lastVisitedIndex);

  return finishedSlides.has(indexToVisit)
    ? calculateNextStepIndex(currentSlideIndex, finishedSlides, indexToVisit)
    : indexToVisit;
};

// ||-------> Handles the updates of a given step item (using the 'id' in the action),
// & then updates de remaining step items if this given change should impact their content
const stepItemsReducer = (state, action) => {
  const [id, value] = action;
  const {setNext, finishedSlides, ...rest} = value;
  const _state = new Map();
  const nextIndex = !rest.current && setNext ? calculateNextStepIndex(id, finishedSlides) : null;

  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    if (id === index)
      _state.set(id, {
        ...previousValue,
        ...rest
      });
    else if (setNext && nextIndex === index) {
      _state.set(index, {...previousValue, current: true});
    } else _state.set(index, previousValue);
  }

  return _state;
};

// ||-------> Stores the correctly answered (finished) slides, the initial state is an empty Map
const finishedSlidesReducer = (state, action) => {
  const [id, value] = action;
  const _state = new Map();

  // eslint-disable-next-line fp/no-loops
  for (const [index, previousValue] of state) {
    _state.set(index, previousValue);
  }

  _state.set(id, value);

  return _state;
};

const SlidesReview = (
  {headerProps, reviewBackgroundAriaLabel, validate, correctionPopinProps, firstSlide},
  context
) => {
  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);

  // ||-------> States init: build initial states && memoize them + reducers creation
  const slidesInitialState = useMemo(() => {
    const states = new Map();
    const {answer, question} = firstSlide;
    // eslint-disable-next-line fp/no-loops
    for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
      const content = index === 0 ? {answer, question} : {};
      states.set(index, {...content, hidden: false, position: index});
    }
    return states;
  }, [firstSlide]);

  const stepItemsInitialState = useMemo(() => {
    const states = new Map();
    // eslint-disable-next-line fp/no-loops
    for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
      const current = index === 0;
      states.set(index, {current, value: `${index + 1}`, icon: null});
    }
    return states;
  }, []);

  const [finishedSlides, updateFinishedSlides] = useReducer(finishedSlidesReducer, new Map());

  const [slidesState, updateSlides] = useReducer(slidesStateReducer, slidesInitialState);

  const [stepItemsState, updateStepItems] = useReducer(stepItemsReducer, stepItemsInitialState);

  const [reviewState, updateReviewState] = useState('ongoing');

  // ||-------> build each slide, passing down the reducers that will act on validation & next clicks

  const builtStackedSlides = useMemo(() => {
    const StackedSlides = [];
    // eslint-disable-next-line fp/no-loops
    for (let slideNumber = 0; slideNumber < TOTAL_SLIDES_STACK; slideNumber++) {
      StackedSlides.push(
        buildSlide(
          slideNumber,
          slidesState,
          updateSlides,
          primarySkinColor,
          validate,
          correctionPopinProps,
          updateStepItems,
          finishedSlides,
          updateFinishedSlides,
          updateReviewState
        )
      );
    }

    return StackedSlides;
  }, [slidesState, primarySkinColor, validate, correctionPopinProps, finishedSlides]);

  // ||-------> transform the step items state (Map structure) to an Array
  const stepItemsArray = useMemo(() => {
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(stepItemsState.values());
  }, [stepItemsState]);

  const _headerProps = {
    ...headerProps,
    steps: stepItemsArray,
    key: 'review-header',
    hiddenSteps: reviewState !== 'ongoing'
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

      <ReviewHeader {..._headerProps} />

      {reviewState === 'ongoing' ? (
        <div
          key="stacked-slides-container"
          data-name="stacked-slides-container"
          className={style.stackedSlidesContainer}
        >
          {builtStackedSlides}
        </div>
      ) : // slot toPlug congrats component
      // <div className={style.congrats}/>
      null}
    </div>
  );
};

SlidesReview.propTypes = {
  headerProps: PropTypes.shape(omit(['steps', ''], ReviewHeader.propTypes)),
  reviewBackgroundAriaLabel: ReviewBackground.propTypes['aria-label'],
  validate: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  firstSlide: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.shape(Answer.propTypes)
  }),
  correctionPopinProps: PropTypes.shape({
    klf: ReviewCorrectionPopin.propTypes.klf,
    information: ReviewCorrectionPopin.propTypes.information,
    next: PropTypes.shape({
      label: PropTypes.string,
      'aria-label': PropTypes.string
    }),
    successLabel: ReviewCorrectionPopin.propTypes.resultLabel,
    failureLabel: ReviewCorrectionPopin.propTypes.resultLabel
  })
};

export default SlidesReview;
