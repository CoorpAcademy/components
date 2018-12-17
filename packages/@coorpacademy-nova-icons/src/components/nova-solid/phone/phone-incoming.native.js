import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.708 3.707l-1.414-1.414L14 8.586V4h-2v8h8v-2h-4.585z" />
      <Path d="M18 16h-4a1 1 0 0 0-1 1v1c-4 0-6.937-3.062-7-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 6.075 4.925 11 11 11h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
