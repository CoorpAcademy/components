import React, {useState, useCallback, useEffect, useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import omit from 'lodash/fp/omit';
import isNil from 'lodash/fp/isNil';
import ReviewBackground from '../../atom/review-background';
import {ICON_VALUES} from '../../atom/review-header-step-item';
// import Loader from '../../atom/loader';
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

// last incorrect -> how to handle nextSlide?

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
  updateRevisionState
) => {
  const {hidden, end, position, action, validationResult, question, answer} = slidesState.get(
    slideNumber
  );
  const {onClick: onValidateClick, label: validateLabel} = validate;

  const validateButtonProps = {
    customStyle: {
      backgroundColor: primarySkinColor
    },
    onClick: async () => {
      const lastSlide = finishedSlides.size >= HIGHEST_INDEX;
      const {validationResult: result, nextSlide, end: _end} = await onValidateClick(lastSlide);
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
          end: _end
        }
      ]);
      if (_end) setTimeout(() => updateRevisionState('finished'), 3000);
      updateStepItems([
        slideNumber,
        {
          icon: result === 'success' ? ICON_VALUES.right : ICON_VALUES.wrong,
          finishedSlides
        }
      ]);
      if (result === 'success') updateFinishedSlides([slideNumber, true]);
    },
    'aria-label': validateLabel,
    label: validateLabel, // `Validate ${slideNumber}`, // validateLabel
    'data-name': 'slide-validate-button',
    // not position0 && validate Button in css then disable user-select
    className: style.validateButton,
    disabled: !isNil(validationResult)
  };

  const {klf, information, next, successLabel, failureLabel} = correctionPopinProps;

  const _correctionPopinProps = {
    // 'aria-label': 'correctionPopin',
    next: {
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
            end
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
        if (finishedSlides.size === TOTAL_SLIDES_STACK)
          setTimeout(() => updateRevisionState('finished'), 2000);
      },
      label: next.label
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
        end ? style.endRevision : null
      )}
    >
      {answer && question ? (
        // maybe extract this as a molecule/ organism??
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

// ----------------------
// when a correct answer is given, it should remain at the latest position,
// then the re-stacking must only be allowed to happen from stack - n_correct_slides
export const slidePositionReducer = (
  // Map<string, { hidden, position, action, validationResult, question, answer}>
  state,
  // [id, value]
  action
) => {
  const [id, value] = action;
  const _state = new Map();

  const {nextSlide, numberOfFinishedSlides, ...newValue} = value;
  // const numberOfCorrectlyAnsweredSlides = finishedSlides.size;

  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < state.size; index++) {
    // this may be the same than validationResult presence
    if (index === id) {
      const previousValue = state.get(id);
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
      const {hidden, position, validationResult, answer, question} = state.get(index);
      // if (newValue.validationResult) {
      if (nextSlide) {
        _state.set(index, {...nextSlide, end: newValue.end, hidden, position});
      } else {
        _state.set(index, {
          ...(validationResult === 'success' ? {validationResult} : null),
          hidden,
          position: position - 1,
          answer,
          question,
          end: newValue.end
        });
      }
    }
  }

  return _state;
};

const getNextIndex = currentIndex => (currentIndex === HIGHEST_INDEX ? 0 : currentIndex + 1);

const calculateNextStepIndex = (currentSlideIndex, finishedSlides, lastVisitedIndex = null) => {
  // only one slide remaining
  if (lastVisitedIndex === currentSlideIndex) {
    return currentSlideIndex;
  }

  const indexToVisit = getNextIndex(isNil(lastVisitedIndex) ? currentSlideIndex : lastVisitedIndex);

  // console.log('calculateNextStepIndex', {
  //   lastVisitedIndex,
  //   currentSlideIndex,
  //   indexToVisit,
  //   finishedSlidesHas: finishedSlides.has(indexToVisit)
  // });

  return finishedSlides.has(indexToVisit)
    ? calculateNextStepIndex(currentSlideIndex, finishedSlides, indexToVisit)
    : indexToVisit;
};

const stepItemsReducer = (
  // Map<string, {current, value, icon}>
  state,
  action
) => {
  const [id, value] = action;
  const {setNext, finishedSlides, ...rest} = value;
  const _state = new Map();
  const nextIndex = !rest.current && setNext ? calculateNextStepIndex(id, finishedSlides) : null;

  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < state.size; index++) {
    const previousValue = state.get(index);
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

const finishedSlidesReducer = (state, action) => {
  const [id, value] = action;
  // const _state = new Map(state);
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

  const [slidesState, updateSlides] = useReducer(slidePositionReducer, slidesInitialState);

  const [stepItemsState, updateStepItems] = useReducer(stepItemsReducer, stepItemsInitialState);

  // use w/ congrats && header animation
  const [revisionState, updateRevisionState] = useState('ongoing');

  // maybe the use memo should be at buildSlide Scale, for each slide state (slidesState) change
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
          updateRevisionState
        )
      );
    }

    return StackedSlides;
  }, [slidesState, primarySkinColor, validate, correctionPopinProps, finishedSlides]);

  const stepItemsArray = useMemo(() => {
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(stepItemsState.values());
  }, [stepItemsState]);

  const _headerProps = {
    ...headerProps,
    steps: stepItemsArray,
    key: 'review-header',
    hiddenSteps: revisionState !== 'ongoing'
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

      {revisionState === 'ongoing' ? (
        <div
          key="stacked-slides-container"
          data-name="stacked-slides-container"
          className={style.stackedSlidesContainer}
        >
          {builtStackedSlides}
        </div>
      ) : (
        <div className={style.congrats}>Congrats!</div>
      )}
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
  firstSlide: {
    question: PropTypes.string,
    answer: PropTypes.shape(Answer.propTypes)
  },
  correctionPopinProps: {
    klf: ReviewCorrectionPopin.propTypes.klf,
    information: ReviewCorrectionPopin.propTypes.information,
    next: PropTypes.shape({
      label: PropTypes.string
    }),
    successLabel: ReviewCorrectionPopin.propTypes.resultLabel,
    failureLabel: ReviewCorrectionPopin.propTypes.resultLabel
  }
};

export default SlidesReview;
