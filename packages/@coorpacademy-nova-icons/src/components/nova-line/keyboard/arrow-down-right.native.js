import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 13v3.586L5.707 4.293 4.293 5.707 16.586 18H13v2h7v-7z"
    />
  </Svg>
);

export default SvgComponent;
