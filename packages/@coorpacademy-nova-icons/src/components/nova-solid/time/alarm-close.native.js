import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.555 22c.693 1.19 1.968 2 3.445 2s2.752-.81 3.445-2h-6.89zM15 17v-3.089a5.998 5.998 0 0 1-4.704-7.767A6 6 0 0 0 3 12v5a3 3 0 0 1-3 3v1h18v-1a3 3 0 0 1-3-3z" />
      <Path d="M19.707 5.707l-1.414-1.414L16 6.586l-2.293-2.293-1.414 1.414L14.586 8l-2.293 2.293 1.414 1.414L16 9.414l2.293 2.293 1.414-1.414L17.414 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
