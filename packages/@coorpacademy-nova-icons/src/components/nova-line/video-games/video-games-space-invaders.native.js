import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M19.998 10.998v-2h-2v-2h-2v-2h-2v2h-4v-2h-2v2h-2v2h-2v2h-2v9h2v-4h1v4h2v-2h10v2h2v-4h1v4h2v-9h-2zm-3 3v2h-10v-2h-3v-1h2v-2h2v-2h8v2h2v2h2v1h-3zM6.998 19.998h4v2h-4zM12.998 19.998h4v2h-4z" />
      <Path d="M15.998 2.998h2v2h-2zM5.998 2.998h2v2h-2zM7.998 11.998h2v2h-2zM13.998 11.998h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
