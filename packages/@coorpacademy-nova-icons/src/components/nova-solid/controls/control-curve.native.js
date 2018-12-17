import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.707 6.293L18 2.586l-3.707 3.707 1.414 1.414L17 6.414V15c0 2.757-2.243 5-5 5s-5-2.243-5-5v-3.586l1.293 1.293 1.414-1.414L6 7.586l-3.707 3.707 1.414 1.414L5 11.414V15c0 3.859 3.141 7 7 7s7-3.141 7-7V6.414l1.293 1.293 1.414-1.414z"
    />
  </Svg>
);

export default SvgComponent;
