import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 6h-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8c0 1.958.811 3.729 2.11 5H2v2h16v-2h-3.11a6.977 6.977 0 0 0 2.03-4H18c2.205 0 4-1.794 4-4s-1.795-4-4-4zm-3 7c0 2.757-2.243 5-5 5s-5-2.243-5-5V6h10v7zm3-1h-1V8h1a2 2 0 0 1 0 4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
