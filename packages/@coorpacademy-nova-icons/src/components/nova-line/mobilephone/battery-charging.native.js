import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 5h-2V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v14c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2V6a1 1 0 0 0-1-1zM7 20V7h2a1 1 0 0 0 1-1V4h4v2a1 1 0 0 0 1 1h2l.001 13H7z" />
      <Path d="M13 8l-5 6h3v4l5-6h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
