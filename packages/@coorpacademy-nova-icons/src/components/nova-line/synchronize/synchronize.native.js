import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.642 5.642A8.907 8.907 0 0 1 12 3c4.963 0 9 4.038 9 9h2c0-6.065-4.935-11-11-11a10.89 10.89 0 0 0-7.771 3.229L2 2v6h6L5.642 5.642zM18.357 18.358A8.9 8.9 0 0 1 12 21c-4.963 0-9-4.038-9-9H1c0 6.065 4.935 11 11 11 2.967 0 5.721-1.167 7.771-3.229L22 22v-6h-6l2.357 2.358z" />
      <Path d="M8 12c0 2.206 1.795 4 4 4s4-1.794 4-4-1.795-4-4-4-4 1.794-4 4zm6 0c0 1.103-.896 2-2 2s-2-.897-2-2 .896-2 2-2 2 .897 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
