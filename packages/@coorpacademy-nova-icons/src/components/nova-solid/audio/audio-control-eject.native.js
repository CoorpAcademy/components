import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm5 15H7v-2h10v2zm-10-4l5-6.666 5 6.666H7z"
    />
  </Svg>
);

export default SvgComponent;
