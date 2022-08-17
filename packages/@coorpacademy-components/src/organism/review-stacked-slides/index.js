import React from 'react';
import classnames from 'classnames';
import _toString from 'lodash/fp/toString';
import isNil from 'lodash/fp/isNil';
import Loader from '../../atom/loader';
import ReviewSlide from '../review-slide';
import propTypes from './prop-types';
import style from './style.css';

export const TOTAL_SLIDES_STACK = 5;

const stylesByPosition = {
  0: style.position0,
  1: style.position1,
  2: style.position2,
  3: style.position3,
  4: style.position4
};

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

const StackedSlides = ({
  slides,
  endReview,
  validateButton,
  correctionPopinProps,
  loadingAriaLabel
}) => {
  const stackedSlides = [];
  // eslint-disable-next-line fp/no-loops
  for (let slideIndex = 0; slideIndex < TOTAL_SLIDES_STACK; slideIndex++) {
    const slide = slides[_toString(slideIndex)];
    const {animationType, hidden, position} = slide;

    const slideView = (
      <div
        key={`slide-${slideIndex}`}
        data-name={`slide-${slideIndex}`}
        className={classnames(
          style.slideBase,
          getSlideAnimation(animationType, position, hidden),
          endReview ? style.endReview : null
        )}
      >
        {isNil(slide.answerUI) && slide.position === 0 ? (
          <Loader className={style.loader} theme="default" aria-label={loadingAriaLabel} />
        ) : (
          <ReviewSlide
            {...{
              slideIndex: _toString(slideIndex),
              slide,
              validateButton,
              correctionPopinProps
            }}
            key={slideIndex}
          />
        )}
      </div>
    );
    stackedSlides.push(slideView);
  }

  return (
    <div
      key="stacked-slides-container-y-overflow"
      className={style.stackedSlidesYAxisOverflowContainer}
    >
      <div
        key="stacked-slides-container"
        data-name="stacked-slides-container"
        className={style.stackedSlidesContainer}
      >
        {stackedSlides}
      </div>
    </div>
  );
};

StackedSlides.propTypes = propTypes;

export default StackedSlides;
