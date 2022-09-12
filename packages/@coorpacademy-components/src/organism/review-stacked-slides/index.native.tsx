import React from 'react';
import {StyleSheet, View} from 'react-native';
import keys from 'lodash/fp/keys';
import Slide from '../review-slide/index.native';
import {Props} from './prop-types';

export const TOTAL_SLIDES_STACK = 5;

const styleSheet = StyleSheet.create({
  stackedSlides: {
    // flex: 1,
    // backgroundColor: '#00f',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  }
});

const StackedSlides = (props: Props) => {
  const {slides = {}, endReview, validateButton, correctionPopinProps} = props;

  const indexes = keys(slides).reverse();
  const stackedSlides = indexes.map(slideIndex => {
    const slide = slides[slideIndex];
    // const {animationType, hidden, position} = slide;

    return (
      <Slide
        {...{
          num: Number.parseInt(slideIndex),
          slideIndex,
          slide,
          validateButton,
          correctionPopinProps
        }}
        key={slideIndex}
      />
    );
  });

  return <View>{stackedSlides}</View>;
};

export default StackedSlides;
