import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.707 6.707l-1.414-1.414L13 6.586V0h-2v6.586L9.707 5.293 8.293 6.707 12 10.414zM11 17.414V24h2v-6.586l1.293 1.293 1.414-1.414L12 13.586l-3.707 3.707 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
