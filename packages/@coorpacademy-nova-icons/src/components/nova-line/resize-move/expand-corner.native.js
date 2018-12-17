import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M10.293 8.707l1.414-1.414L7 2.586 2.293 7.293l1.414 1.414L6 6.414V16a2 2 0 0 0 2 2h9.586l-2.293 2.293 1.414 1.414L21.414 17l-4.707-4.707-1.414 1.414L17.586 16H8V6.414l2.293 2.293z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
