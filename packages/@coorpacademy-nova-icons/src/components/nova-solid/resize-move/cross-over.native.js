import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 3.999v-2H2v7h2V5.413l16.293 16.293 1.414-1.414L5.414 3.999z" />
      <Path d="M9 19.999H5.414l5.293-5.293-1.414-1.414L4 18.585v-3.586H2v7h7zM14.706 10.707l-1.414-1.414 7-7 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
