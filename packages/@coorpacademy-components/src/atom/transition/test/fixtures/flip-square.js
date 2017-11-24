import React from 'react';
import FlippableSquare from './flippable-square';
import style from './flippable-square/style.css';

export default {
  props: {
    animated: false,
    triggerClassName: style.flipped,
    transitionProperty: 'transform',
    onAnimationEnd: () => console.log('flip done !')
  },
  children: <FlippableSquare />
};
