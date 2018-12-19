import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 15c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5h-2c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3v2z"
      fill="currentColor"
    />
    <Path
      d="M16 15h-3v-4h4v1.828A3.004 3.004 0 0 0 19 10V8h2v2c0 2.757-2.243 5-5 5zM20 24H4v-2c0-3.533 3.29-6 8-6s8 2.467 8 6v2zM6 22h12c0-2.355-2.467-4-6-4s-6 1.645-6 4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
