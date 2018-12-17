import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.389 19.394A8.918 8.918 0 0 0 11 21.31v-2.02a6.964 6.964 0 0 1-3.185-1.321l-1.426 1.425zM5.032 13h-2a8.945 8.945 0 0 0 1.943 4.98l1.426-1.427A6.938 6.938 0 0 1 5.032 13zM6.749 7.74L5.251 6.417A8.976 8.976 0 0 0 3.112 11h2.027a7 7 0 0 1 1.61-3.26zM16.527 4.603L19 2h-7v7.37l3.102-3.266C17.408 7.25 19 9.625 19 12.37c0 3.52-2.613 6.432-6 6.92v2.02c4.493-.5 8-4.317 8-8.941 0-3.31-1.803-6.202-4.473-7.766z" />
    </G>
  </Svg>
);

export default SvgComponent;
