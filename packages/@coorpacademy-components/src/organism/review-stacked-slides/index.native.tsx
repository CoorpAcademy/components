import React, {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet, useWindowDimensions} from 'react-native';
import keys from 'lodash/fp/keys';
import {useTranslateY} from '@coorpacademy/react-native-animation';
import Slide from '../review-slide/index.native';
import type {ReviewStackProps} from './prop-types';

const style = StyleSheet.create({
  slides: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});

/*
   - slides are ordered to be played from left to right: [0,1,2,3]
   - slides are piled on the view, so we need to reverse the order:
   -> it's like our eye is looking from the right [3,2,1,0] <-- oO
*/
const StackedSlides = (props: ReviewStackProps) => {
  const {height: windowHeight} = useWindowDimensions();
  const {endReview, slides, validateButton, correctionPopinProps} = props;
  const [unstacked, setUnstacked] = useState<string[]>([]);
  const [restacking, setRestacking] = useState<string | null>(null);
  const [restackingDone, setRestackingDone] = useState<boolean>(false);

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

  const restackTranslation = useTranslateY({
    toValue: 0,
    fromValue: -windowHeight,
    duration: 1200,
    easing: Easing.out(Easing.cubic)
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

  const animatedFrontSlide =
    unstackingSlide || (restackingSlide && restacking === null ? restackingSlide : undefined);

  const animatedRestackedSlide = restacking !== null;

  useEffect(() => {
    if (restacking !== null && orderedKeys.includes(restacking)) {
      setRestacking(null);
      setRestackingDone(false);
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
    const startRestacking = !restackingDone && restackingSlide && restacking !== restackingSlide;

    if (startRestacking) {
      translateDown.start(() => {
        setRestacking(restackingSlide);
        restackTranslation.start(() => {
          setRestackingDone(true);
        });
      });
    }
    // this effect is required only to trigger the restack animation when a new restackingSlide is set
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restackingSlide, restacking]);

  const stackedSlides = orderedKeys.map((slideIndex, index) => {
    const slide = slides[slideIndex];
    const num = orderedKeys.length - index;

    return (
      <Slide
        {...{
          num,
          slideIndex,
          slide,
          validateButton,
          correctionPopinProps
        }}
        key={slideIndex}
      />
    );
  });

  if (animatedFrontSlide) {
    stackedSlides.push(
      <Slide
        {...{
          num: 0,
          slideIndex: animatedFrontSlide,
          slide: slides[animatedFrontSlide],
          validateButton,
          correctionPopinProps
        }}
        animatedStyle={[translateDown.animatedStyle]}
        key={animatedFrontSlide}
      />
    );
  }

  return (
    <Animated.View style={[style.slides, hideSlides.animatedStyle]}>
      {animatedRestackedSlide ? (
        <Slide
          {...{
            num: orderedKeys.length + 1,
            slideIndex: restacking,
            slide: slides[restacking],
            validateButton,
            correctionPopinProps
          }}
          animatedStyle={[restackTranslation.animatedStyle]}
          key={restacking}
        />
      ) : null}
      {stackedSlides}
    </Animated.View>
  );
};

export default StackedSlides;
