import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 18.586V10h-2v8.586l-2.293-2.293-1.414 1.414L12 22.414l4.707-4.707-1.414-1.414zM19 2H5c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
