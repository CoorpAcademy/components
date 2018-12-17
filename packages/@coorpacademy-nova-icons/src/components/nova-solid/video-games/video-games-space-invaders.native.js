import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M6.998 19.998h4v2h-4zM12.998 19.998h4v2h-4zM15.998 2.998h2v2h-2zM5.998 2.998h2v2h-2z" />
      <Path d="M19.998 10.998v-2h-2v-2h-2v-2h-2v2h-4v-2h-2v2h-2v2h-2v2h-2v9h2v-4h1v4h2v-2h10v2h2v-4h1v4h2v-9h-2zm-10 3h-2v-2h2v2zm6 0h-2v-2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
