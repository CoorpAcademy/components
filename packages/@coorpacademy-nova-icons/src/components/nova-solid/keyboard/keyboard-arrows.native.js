import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 11V2H7v9h10zm-5-7l3 3h-2v3h-2V7H9l3-3zM1 12v10h10V12H1zm8 6H6v2l-3-3 3-3v2h3v2zM13 12v10h10V12H13zm5 8v-2h-3v-2h3v-2l3 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
