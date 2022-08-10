import React from 'react';
import _toString from 'lodash/fp/toString';
import Slide from '../review-slide';
import propTypes from './prop-types';
import style from './style.css';

export const TOTAL_SLIDES_STACK = 5;

const StackedSlides = ({
  uiSlides,
  endReview,
  validateButton,
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
  for (let slideIndex = 0; slideIndex < TOTAL_SLIDES_STACK; slideIndex++) {
    const slide = (
      <Slide
        {...{
          slideIndex: _toString(slideIndex),
          uiSlides,
          endReview,
          validateButton,
          finishedSlides,
          finishedSlidesSize,
          updateSlidesOnNext,
          updateReviewStatus,
          updateStepItemsOnNext,
          progression,
          correctionPopinProps
        }}
        key={slideIndex}
      />
    );
    stackedSlides.push(slide);
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
