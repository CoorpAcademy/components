import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 4h-6a1 1 0 0 0-1 1v1h-4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM4 4h4v16H4V4zm6 4h4v12h-4V8zm10 12h-4V6h4v14z" />
      <Path d="M5 5h2v8H5zM11 9h2v6h-2zM17 7h2v7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
