import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M3 12.002c0 5.524 4.477 10 10 10v-20c-5.523 0-10 4.476-10 10z"
    />
  </Svg>
);

export default SvgComponent;
