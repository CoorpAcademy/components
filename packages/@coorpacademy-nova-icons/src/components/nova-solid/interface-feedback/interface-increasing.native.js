import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M14 7v2h3.586L12 14.586l-4-4-6.707 6.708 1.414 1.413L8 13.414l4 4 7-7V14h2V7z"
    />
  </Svg>
);

export default SvgComponent;
