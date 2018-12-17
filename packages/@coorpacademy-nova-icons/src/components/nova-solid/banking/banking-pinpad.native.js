import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 5.999H5V4h14v3.999zM4 12h4v2H4zM10 12h4v2h-4zM16 12h4v2h-4zM4 16h4v2H4zM10 16h4v2h-4zM16 16h4v2h-4zM4 20h4v2H4zM10 20h4v2h-4zM16 20h4v2h-4z" />
      <Path d="M7 5h2v2H7zM11 5h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
