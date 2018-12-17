import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24H0z" />
    <G fill="currentColor">
      <Path d="M19.999 15.998v2.586l-1.471-1.471c-.454.53-.93 1.006-1.404 1.424l1.461 1.461h-2.586v2h5a1 1 0 0 0 1-1v-5h-2zM7.267 5.851L5.999 4.584V.998h-2v3h-3v2h3.586L5.92 7.333a4.784 4.784 0 0 1 1.347-1.482zM19.999 10.998c0-2.989-1.607-5-4-5-1.332 0-2.333.643-3 1.463-.667-.82-1.668-1.463-3-1.463-2.393 0-4 2.011-4 5 0 5.555 6.285 8.761 6.553 8.896a1.017 1.017 0 0 0 .894 0c.268-.135 6.553-3.341 6.553-8.896z" />
    </G>
  </Svg>
);

export default SvgComponent;
