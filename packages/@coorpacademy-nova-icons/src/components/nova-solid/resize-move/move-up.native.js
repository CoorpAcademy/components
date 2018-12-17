import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 5.414V14h2V5.414l2.293 2.293 1.414-1.414L12 1.586 7.293 6.293l1.414 1.414zM19 16H5c-1.103 0-2 .896-2 2v2c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
