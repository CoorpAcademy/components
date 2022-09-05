import React from 'react';
import {View} from 'react-native';
import _toString from 'lodash/fp/toString';
import Slide from '../review-slide/index.native';
import {Props} from './prop-types';

export const TOTAL_SLIDES_STACK = 5;

const StackedSlides = (props: Props) => {
  const {slides = {}, endReview, validateButton, correctionPopinProps} = props;
  const stackedSlides = [];
  // eslint-disable-next-line fp/no-loops
  for (let slideIndex = 0; slideIndex < TOTAL_SLIDES_STACK; slideIndex++) {
    const slide = slides[_toString(slideIndex)];
    // const {animationType, hidden, position} = slide;

    const slideView = (
      <View key={`slide-${slideIndex}`}>
        <Slide
          {...{
            slideIndex: _toString(slideIndex),
            slide,
            validateButton,
            correctionPopinProps
          }}
          key={slideIndex}
        />
      </View>
    );
    stackedSlides.push(slideView);
  }

  return <View>{stackedSlides}</View>;
};

export default StackedSlides;
