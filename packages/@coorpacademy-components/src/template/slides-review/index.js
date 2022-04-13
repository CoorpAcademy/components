import React, {useState, useCallback, useEffect, useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
// import map from 'lodash/fp/map';
import isNil from 'lodash/fp/isNil';
import ReviewBackground from '../../atom/review-background';
// templateslidesreview
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
  slidesPositions,
  updateSlide,
  primarySkinColor,
  onValidateClick,
  onNextSlideClick
) => {
  const {
    hidden,
    playable,
    position,
    action,
    validationResult,
    question,
    answer
  } = slidesPositions.get(slideNumber);
  const highestIndex = TOTAL_SLIDES_STACK - 1;

  const validateButtonProps = {
    customStyle: {
      backgroundColor: primarySkinColor,
      // color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    // update slide && use a 4th state that is slide out && hide || slide out && slide in && then normal
    onClick: async () => {
      const {validationResult: result, nextSlide} = await onValidateClick();
      // update all slides, each slide has to move a prop, probably use Maps ???
      updateSlide([
        slideNumber,
        {
          hidden,
          playable,
          position,
          validationResult: result,
          answer,
          question,
          nextSlide
          // action: validationResult === 'success' ? 'unstack' : 'restack'
        }
      ]);
    },
    'aria-label': 'buttonAriaLabel', // buttonAriaLabel
    label: `Validate ${slideNumber}`, // 'Validate', // buttonLabel
    'data-name': 'skill-card-button',
    className: style.validateButton,
    disabled: !isNil(validationResult)
  };

  const correctionPopinProps = {
    customStyle: {
      backgroundColor: primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    // 'aria-label': 'correctionPlugin',
    next: {
      // 'aria-label': 'buttonAriaNext',
      onClick: () => {
        onNextSlideClick();
        // update all slides, each slide has to move a prop, probably use Maps ???
        updateSlide([
          slideNumber,
          {
            hidden: validationResult === 'success',
            playable,
            position: highestIndex,
            action: validationResult === 'success' ? 'unstack' : 'restack',
            answer,
            question
          }
        ]);
      },
      label: 'Next'
    },
    klf: {
      label: 'key learning factor',
      tooltip: 'Some tooltip info.',
      onClick: () => {
        console.log('key learning factor');
      }
    },
    information: {
      label: 'Key learning factor',
      message: 'info msg'
    },
    type: validationResult === 'success' ? 'right' : 'wrong',
    resultLabel: 'resultLabel'
    // 'data-name': 'skill-card-next',
    // className: style.validateButton
  };

  const questionOrigin = 'From "Master Design Thinking to become more agile" course';

  return (
    <div
      key={`slide-${slideNumber}`}
      data-name={`slide-${slideNumber}`}
      className={classnames(style.slideBase, getSlideAnimation(action, position, hidden))}
      // style={{
      //   opacity: hidden ? 0 : 1
      // }}
    >
      {answer && question ? (
        <div className={style.slideContentContainer}>
          <div key="from-course" className={style.questionOrigin}>
            {questionOrigin}
          </div>
          <div key="title" className={style.question}>
            {question}
          </div>
          <div className={style.help}>{answer.help}</div>
          <Answer {...answer} key="answer" />
        </div>
      ) : null}

      <div key="button-wrapper" className={style.validateButtonWrapper}>
        <ButtonLink {...validateButtonProps} />
      </div>
      <div
        className={
          validationResult ? style.correctionPopinWrapper : style.hiddenCorrectionPopinWrapper
        }
      >
        <ReviewCorrectionPopin {...correctionPopinProps} />
      </div>
    </div>
  );
};

export const slidePositionReducer = (
  // Map<string, { hidden, playable, position, action, validationResult, question, answer}>
  state,
  // tuple id, value
  action
) => {
  const [id, value] = action;
  const _state = new Map();

  const {nextSlide, ...newValue} = value;

  console.log('slidePositionReducer', id, newValue.position, newValue.hidden, state);

  // eslint-disable-next-line fp/no-loops
  for (let index = 0; index < state.size; index++) {
    // this may be the same than validationResult presence
    if (index === id) _state.set(id, newValue);
    else {
      const {hidden, playable, position, validationResult, answer, question} = state.get(index);
      // const _hidden = !!hidden;
      if (newValue.validationResult) {
        _state.set(index, {...nextSlide, hidden, playable, position});
      } else
        _state.set(index, {
          ...(validationResult === 'success' ? {validationResult} : null),
          hidden,
          playable,
          position: position - 1,
          answer,
          question
        });
    }
  }

  console.log('_state', _state);
  return _state;
};

const SlidesReview = (
  {headerProps, reviewBackgroundAriaLabel, onValidateClick, onNextSlideClick, firstSlide},
  context
) => {
  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);

  const initialState = useMemo(() => {
    const states = new Map();
    const {answer, question} = firstSlide;
    // eslint-disable-next-line fp/no-loops
    for (let index = 0; index < TOTAL_SLIDES_STACK; index++) {
      const content = index === 0 ? {answer, question} : {};
      states.set(index, {...content, playable: index === 0, hidden: false, position: index});
    }
    return states;
  }, [firstSlide]);

  const [slidesPositions, dispatch] = useReducer(slidePositionReducer, initialState);

  const builtStackedSlides = useMemo(() => {
    console.log('buildSlides');
    const StackedSlides = [];
    // eslint-disable-next-line fp/no-loops
    for (let slideNumber = 0; slideNumber < TOTAL_SLIDES_STACK; slideNumber++) {
      StackedSlides.push(
        buildSlide(
          slideNumber,
          slidesPositions,
          dispatch,
          primarySkinColor,
          onValidateClick,
          onNextSlideClick
        )
      );
    }

    return StackedSlides;
  }, [onNextSlideClick, onValidateClick, primarySkinColor, slidesPositions]);

  return (
    <div data-name="slides-revision-container" className={style.slidesRevisionContainer}>
      <div className={style.playerBackground}>
        <ReviewBackground aria-label={reviewBackgroundAriaLabel} />
      </div>

      <ReviewHeader {...headerProps} />

      <div data-name="stacked-slides-container" className={style.stackedSlidesContainer}>
        {builtStackedSlides}
      </div>
    </div>
  );
};

SlidesReview.propTypes = {
  headerProps: PropTypes.shape(ReviewHeader.propTypes),
  reviewBackgroundAriaLabel: ReviewBackground.propTypes['aria-label'],
  onValidateClick: PropTypes.func,
  onNextSlideClick: PropTypes.func,
  firstSlide: {
    question: PropTypes.string,
    answer: PropTypes.shape(Answer.propTypes)
  },
  correctionPopinProps: {
    klf: ReviewCorrectionPopin.propTypes.klf,
    information: ReviewCorrectionPopin.propTypes.information,
    next: ReviewCorrectionPopin.propTypes.next,
    resultLabel: ReviewCorrectionPopin.propTypes.resultLabel
  }
};

export default SlidesReview;
