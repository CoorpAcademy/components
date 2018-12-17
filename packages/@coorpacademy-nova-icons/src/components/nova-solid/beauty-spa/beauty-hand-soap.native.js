import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M22 9.5a4.5 4.5 0 1 1-9 0C13 7.015 17.5 1 17.5 1S22 7.015 22 9.5z"
    />
    <Path
      fill="#767676"
      d="M19 18h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1.004 1.004 0 0 0-1.079-.222L5 16.522V23h11c.265 0 .52-.105.707-.293l3-3A1 1 0 0 0 19 18zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"
    />
  </Svg>
);

export default SvgComponent;
