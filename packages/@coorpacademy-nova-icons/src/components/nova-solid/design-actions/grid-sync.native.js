import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 10h4v4H4zM4 16h4v4H4zM10 10.111V14h3.889A9.022 9.022 0 0 1 10 10.111z" />
      <Path d="M16 22H2V8h7.231A9.03 9.03 0 0 1 9 6H0v18h18v-9a9.03 9.03 0 0 1-2-.231V22z" />
      <Path d="M10 16h4v4h-4zM18 0c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.189L17 7h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 12c3.309 0 6-2.69 6-6 0-3.309-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
