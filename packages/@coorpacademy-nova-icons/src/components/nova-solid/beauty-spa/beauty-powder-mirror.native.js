import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.013 19.528a1 1 0 0 0-.882-.528H3.869a1 1 0 0 0-.832 1.554l.37.556c.37.556.994.89 1.663.89h13.86a2 2 0 0 0 1.664-.89l.37-.556a1 1 0 0 0 .049-1.026zM6.393 18h11.215C19.666 16.351 21 13.836 21 11c0-4.963-4.038-9-9-9s-9 4.037-9 9c0 2.836 1.335 5.351 3.393 7zM12 5a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
    </G>
  </Svg>
);

export default SvgComponent;
