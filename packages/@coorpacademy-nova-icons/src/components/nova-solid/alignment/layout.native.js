import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2.003H9v20h12a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1zM7 2.003H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4v-20z" />
    </G>
  </Svg>
);

export default SvgComponent;
