import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17 4.999H7c-3.86 0-7 3.14-7 7 0 3.861 3.14 7 7 7h10c3.86 0 7-3.139 7-7 0-3.86-3.14-7-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
    />
  </Svg>
);

export default SvgComponent;
