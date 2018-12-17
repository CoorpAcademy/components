import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 3.586v2.828L19.586 12 14 17.586v2.828L22.414 12zM10 20.414v-2.828L4.414 12 10 6.414V3.586L1.586 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
