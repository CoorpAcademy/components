import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1.195l.607 6.221A2 2 0 0 0 9.79 19H10v1a2 2 0 0 0 4 0v-1h.21a2 2 0 0 0 1.988-1.779L16.805 11H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-4 14h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2zm4-7H6V4h12v5z"
    />
  </Svg>
);

export default SvgComponent;
