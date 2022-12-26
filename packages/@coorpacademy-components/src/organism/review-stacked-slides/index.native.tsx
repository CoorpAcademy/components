import React, {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet, useWindowDimensions} from 'react-native';
import keys from 'lodash/fp/keys';
import {useTranslateY} from '@coorpacademy/react-native-animation';
import Slide from '../review-slide/index.native';
import type {ReviewSlideProps} from '../review-slide/prop-types';
import type {ReviewStackProps} from './prop-types';

export const TOTAL_SLIDES_STACK = 5;

const style = StyleSheet.create({
  slides: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});

type FakeSlideProps = {position: number; validateButton: ReviewSlideProps['validateButton']};
const FakeSlide = ({position, validateButton}: FakeSlideProps) => (
  <Slide
    num={position}
    slide={{loading: true, position}}
    slideIndex={`${position}`}
    validateButton={validateButton}
  />
);

/*
   - slides are ordered to be played from left to right: [0,1,2,3]
   - slides are piled on the view, so we need to reverse the order:
   -> it's like our eye is looking from the right [3,2,1,0] <-- oO
*/
const StackedSlides = (props: ReviewStackProps) => {
  const {height: windowHeight} = useWindowDimensions();
  const {endReview, slides, validateButton, correctionPopinProps} = props;
  const [unstacked, setUnstacked] = useState<string[]>([]);
  const [restacked, setRestacked] = useState<string | null>();

  const hideSlides = useTranslateY({
    fromValue: 0,
    toValue: windowHeight,
    duration: 800
  });

  const translateDown = useTranslateY({
    fromValue: 0,
    toValue: windowHeight - 100,
    duration: 500,
    easing: Easing.cubic
  });

  useEffect(() => {
    if (endReview) {
      hideSlides.start();
    }
  }, [endReview, hideSlides]);

  const restackingSlide = keys(slides).find(k => slides[k].animationType === 'restack');
  const unstackingSlide = keys(slides).find(k => slides[k].animationType === 'unstack');

  const remainingKeys = keys(slides).filter(
    k => slides[k].position >= 0 && !slides[k].animationType
  );

  const orderedKeys = remainingKeys.sort((k1, k2) =>
    slides[k2].position > slides[k1].position ? 1 : -1
  );

  const animatedSlide = restackingSlide || unstackingSlide;

  useEffect(() => {
    if (restacked && orderedKeys.includes(restacked)) {
      setRestacked(null);
    }
    // this effect is required only when the list orderedKeys changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedKeys.toString()]);

  useEffect(() => {
    const unstacking = unstackingSlide && !unstacked.includes(unstackingSlide);

    if (unstacking) {
      translateDown.start(() => {
        setUnstacked([...unstacked, unstackingSlide]);
      });
    }
  }, [unstackingSlide, unstacked, setUnstacked, translateDown]);

  useEffect(() => {
    const restacking = restackingSlide && restacked !== restackingSlide;

    if (restacking) {
      translateDown.start(() => {
        setRestacked(restackingSlide);
      });
    }
  }, [restackingSlide, restacked, setRestacked, translateDown]);

  const stackedSlides = orderedKeys.map((slideIndex, index) => {
    const slide = slides[slideIndex];

    return (
      <Slide
        {...{
          num: orderedKeys.length - index,
          slideIndex,
          slide,
          validateButton,
          correctionPopinProps
        }}
        key={slideIndex}
      />
    );
  });

  if (animatedSlide) {
    stackedSlides.push(
      <Slide
        {...{
          num: 0,
          slideIndex: animatedSlide,
          slide: slides[animatedSlide],
          validateButton,
          correctionPopinProps
        }}
        animatedStyle={[translateDown.animatedStyle]}
        key={animatedSlide}
      />
    );
  }

  return (
    <Animated.View style={[style.slides, hideSlides.animatedStyle]}>
      {restacked ? (
        <FakeSlide position={orderedKeys.length + 1} validateButton={validateButton} />
      ) : null}
      {stackedSlides}
    </Animated.View>
  );
};

export default StackedSlides;
