import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Circle cx={12} cy={12} r={2} fill="currentColor" />
    <Path
      fill="currentColor"
      d="M15 7.415l-3-3-3 3L7.586 6 12 1.586 16.414 6zM12 22.415L7.586 18 9 16.586l3 3 3-3L16.414 18z"
    />
  </Svg>
);

export default SvgComponent;
