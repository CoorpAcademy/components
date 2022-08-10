import React from 'react';
import classnames from 'classnames';
import _toString from 'lodash/fp/toString';
import Slide from '../review-slide';
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

const StackedSlides = ({uiSlides, endReview, validateButton, correctionPopinProps}) => {
  const stackedSlides = [];
  // eslint-disable-next-line fp/no-loops
  for (let slideIndex = 0; slideIndex < TOTAL_SLIDES_STACK; slideIndex++) {
    const slide = uiSlides[_toString(slideIndex)];
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
        <Slide
          {...{
            slideIndex: _toString(slideIndex),
            slide,
            validateButton,
            correctionPopinProps
          }}
          key={slideIndex}
        />
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
