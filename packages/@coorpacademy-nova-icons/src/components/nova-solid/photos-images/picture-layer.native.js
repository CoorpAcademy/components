import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 7.001v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2V9a2 2 0 0 1 2-2h10z" />
      <Path d="M21 9H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM9 19l2.828-4.537 2.022 3.244 3.173-5.088L21 19H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
