import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M12 2s-7 8-7 13c0 3.867 3.134 7 7 7s7-3.133 7-7c0-5-7-13-7-13zm0 18a5 5 0 0 1-5-5c0-4 5-10 5-10v15z"
    />
  </Svg>
);

export default SvgComponent;
