import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 5v1h2V5c0-1.654-1.346-3-3-3H8v2h2c.551 0 1 .449 1 1zM18 2s-2 0-3 1-1 3-1 3 2 0 3-1 1-3 1-3zM16.98 12.567C16.79 9.912 15.4 7 12 7c-3.398 0-4.789 2.912-4.979 5.567C6.059 13.546 5 14.797 5 17c0 2.408 2.19 5 7 5s7-2.592 7-5c0-2.203-1.059-3.454-2.02-4.433z" />
    </G>
  </Svg>
);

export default SvgComponent;
