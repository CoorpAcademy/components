import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 9V7c0-2.206-1.794-4-4-4h-2C9.794 3 8 4.795 8 7v5H6v2h2v5H6v2h12v-2h-8v-5h4v-2h-4V7c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v2h2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
