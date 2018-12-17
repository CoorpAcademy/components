import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm2 6h4v2h-4v-2zm-8 0h4v2H6v-2zm0 8c-1.106 0-2-.895-2-2s.894-2 2-2 2 .894 2 2-.894 2-2 2zm8 2h-4v-2h4v2zm4-2a2 2 0 1 1-.001-3.999A2 2 0 0 1 18 16.003z"
    />
  </Svg>
);

export default SvgComponent;
