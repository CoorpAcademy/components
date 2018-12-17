import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 12v11h4v-5a4 4 0 1 1 8 0v5h4V12l-8-4-8 4z" />
      <Path d="M12 3L1 8v3l11-5 11 5V8z" />
    </G>
  </Svg>
);

export default SvgComponent;
