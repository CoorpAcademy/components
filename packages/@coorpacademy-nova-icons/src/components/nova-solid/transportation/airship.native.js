import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <Path
      fill="currentColor"
      d="M24 11s-1.178-.953-3-2.096V5a1 1 0 0 0-1.273-.962c-1.283.364-2.631 1.716-3.298 2.46C14.393 5.641 12.159 5 10 5 3.372 5 0 7.687 0 11c0 2.09 1.345 3.929 4 5.004V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.631a22.486 22.486 0 0 0 2.428-.867c.667.744 2.016 2.097 3.299 2.461A1.003 1.003 0 0 0 21 17v-3.904C22.822 11.953 24 11 24 11zM8 19H6v-2h2v2zm4-2v2h-2v-2h2z"
    />
  </Svg>
);

export default SvgComponent;
