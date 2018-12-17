import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <Path
      fill="currentColor"
      d="M18.998.998h-14c-1.104 0-2 .897-2 2v18c0 1.104.897 2 2 2h11c2.757 0 5-2.243 5-5v-15c0-1.103-.896-2-2-2zm-8 18h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-6a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7z"
    />
  </Svg>
);

export default SvgComponent;
