import React from 'react';
import _toString from 'lodash/fp/toString';
import Slide from '../review-slide';
import propTypes from './prop-types';

export const TOTAL_SLIDES_STACK = 5;

const StackedSlides = ({
  uiSlides,
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
  for (let slideIndex = 0; slideIndex < TOTAL_SLIDES_STACK; slideIndex++) {
    const slide = (
      <Slide
        {...{
          slideIndex: _toString(slideIndex),
          uiSlides,
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
        key={slideIndex}
      />
    );
    stackedSlides.push(slide);
  }

  return stackedSlides;
};

StackedSlides.propTypes = propTypes;

export default StackedSlides;
