import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.707 15.709L12 13.416l2.293 2.293 1.414-1.414-2.293-2.293 2.293-2.293-1.414-1.414L12 10.588 9.707 8.295 8.293 9.709l2.293 2.293-2.293 2.293z" />
      <Path d="M19 3.002H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2zm-.003 16H5v-14h14l-.003 14z" />
    </G>
  </Svg>
);

export default SvgComponent;
