import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 15c6.784 0 9-2.231 9-3V9.968C16.191 11.157 13.176 12 9 12s-7.191-.843-9-2.032V12c0 .769 2.216 3 9 3z" />
      <Path d="M9 7c-4.176 0-7.191-.843-9-2.032V7c0 .769 2.216 3 9 3s9-2.231 9-3V4.968C16.191 6.157 13.176 7 9 7z" />
      <Path d="M9 5c5.195 0 7.705-1.307 8.599-2.266C16.404.936 12.688 0 9 0S1.596.936.401 2.734C1.295 3.693 3.805 5 9 5zM9 17c-4.176 0-7.191-.843-9-2.032V16c0 2.626 4.527 4 9 4s9-1.374 9-4v-1.032C16.191 16.157 13.176 17 9 17zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
