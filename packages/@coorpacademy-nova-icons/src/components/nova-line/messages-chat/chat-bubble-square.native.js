import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M5.998 22v-4h-2c-1.103 0-2-.897-2-2V4c0-1.104.897-2 2-2h16c1.103 0 2 .896 2 2v12c0 1.103-.897 2-2 2h-8.667l-5.333 4zm-2-18v12h4v2l2.667-2h9.333V4h-16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
