import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 15.999V6.413l2.293 2.293 1.414-1.414L17 2.585l-4.707 4.707 1.414 1.414L16 6.413v9.586H6.414l2.293-2.293-1.414-1.414-4.707 4.707 4.707 4.707 1.414-1.414-2.293-2.293H16a2 2 0 0 0 2-2z"
    />
  </Svg>
);

export default SvgComponent;
