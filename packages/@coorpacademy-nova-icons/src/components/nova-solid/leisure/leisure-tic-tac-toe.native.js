import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 6h-4V4h4v4zm-10 6v-4h4v4h-4zm4 2v4h-4v-4h4zm-6-2H4v-4h4v4zm2-6V4h4v4h-4zm6 2h4v4h-4v-4zM8 4v4H4V4h4zM4.001 16h4v4h-4v-4zM16 20v-4h4v4h-4z" />
      <Circle cx={12} cy={12} r={1.25} />
      <Path d="M5 5h2v2H5zM17 17h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
