import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 12v3.586l-7-7-4 4-5.293-5.293-1.414 1.414L8 15.414l4-4L17.586 17H14v2h7v-7z"
    />
  </Svg>
);

export default SvgComponent;
