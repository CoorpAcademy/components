import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2H6c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM6 20V4h6v2h2V4h4l.001 16H6z" />
      <Path d="M14 6h2v2h-2zM12 8h2v2h-2zM14 10h2v2h-2zM12 12h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
