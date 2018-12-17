import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="#767676" d="M12 2L2 17l10 5 10-5L12 2zm0 18l-7-4 7-11v15z" />
  </Svg>
);

export default SvgComponent;
