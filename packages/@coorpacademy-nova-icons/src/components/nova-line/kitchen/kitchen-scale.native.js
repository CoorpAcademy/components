import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M20.958 19.713l-3-10A1.001 1.001 0 0 0 17 9h-4V7h5c.334 0 .646-.167.832-.445l2-3-1.664-1.109L17.465 5H6.535L4.832 2.445l-1.664 1.11 2 3C5.354 6.833 5.666 7 6 7h5v2H7c-.441 0-.831.29-.958.713l-3 10c-.091.303-.033.631.155.885.19.253.487.402.803.402h16c.316 0 .613-.149.803-.402.188-.254.246-.582.155-.885zM5.344 19l2.4-8h8.512l2.4 8H5.344z" />
      <Path d="M10 16c0 1 .896 2 2 2s2-1 2-2-2-4-2-4-2 3-2 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
