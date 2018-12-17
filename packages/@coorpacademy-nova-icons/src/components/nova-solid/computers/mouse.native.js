import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M14 6h1c1.654 0 3-1.346 3-3V2h-2v1c0 .551-.449 1-1 1h-1c-1.654 0-3 1.346-3 3v1H8c-1.103 0-2 .896-2 2v7c0 3.309 2.691 6 6 6s6-2.691 6-6v-7c0-1.104-.897-2-2-2h-3V7c0-.551.449-1 1-1zm-3 7H8v-3h3v3zm5-3v3h-3v-3h3z"
    />
  </Svg>
);

export default SvgComponent;
