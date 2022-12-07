import React, {useEffect} from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';
import keys from 'lodash/fp/keys';
import Slide from '../review-slide/index.native';
import useTranslateVertically from '../../behaviours/use-translate-vertically.native';
import {ReviewStackProps} from './prop-types';

export const TOTAL_SLIDES_STACK = 5;

const style = StyleSheet.create({
  slides: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});

const StackedSlides = (props: ReviewStackProps) => {
  const {height: windowHeight} = useWindowDimensions();
  const {slides, validateButton, correctionPopinProps} = props;

  const {translate, animatedY} = useTranslateVertically({
    fromValue: 0,
    toValue: windowHeight,
    duration: 800
  });

  useEffect(translate, [translate]);

  const indexes = keys(slides).reverse();
  const stackedSlides = indexes.map(slideIndex => {
    const slide = slides[slideIndex];

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

  return <Animated.View style={[style.slides, animatedY]}>{stackedSlides}</Animated.View>;
};

export default StackedSlides;
