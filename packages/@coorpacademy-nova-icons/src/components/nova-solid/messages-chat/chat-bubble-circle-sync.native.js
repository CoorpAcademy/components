import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 16c-5.385 0-9.764-4.26-9.979-9.592C3.955 7.553.998 10.971.998 15c0 1.735.541 3.392 1.572 4.836L-.002 24h11c5.307 0 9.649-3.743 9.969-8.448-.938.291-1.936.448-2.969.448z" />
      <Path d="M17.998 0c-3.308 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.189L16.998 7h-5v5l1.761-1.761A5.94 5.94 0 0 0 17.998 12c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
