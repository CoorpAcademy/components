import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M16.868 10.724C19.623 7.969 21 2 21 2s-3.203.743-6 2.222v2.85l-1.756-1.757a8.695 8.695 0 0 0-.968.818c-2.753 2.754-2.392 4.954-1.377 5.969L8 15H5v2c-1.654 0-3 1.346-3 3v1c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3v-1c0-1.654-1.346-3-3-3v-2h-2l2.209-2.209c1.163.238 2.781-.189 4.659-2.067zM12 19c.551 0 1 .448 1 1v1c0 .552-.449 1-1 1H5c-.551 0-1-.448-1-1v-1c0-.552.449-1 1-1h2v-2h3v2h2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
