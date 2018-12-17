import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 4h-2v4h2v12H7V8h2V4H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <Path d="M13 10V8h-2v2H9l3 3 3-3zM11 5h2v2h-2zM11 2h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
