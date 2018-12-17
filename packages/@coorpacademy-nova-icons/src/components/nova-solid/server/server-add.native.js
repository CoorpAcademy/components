import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 15c6.784 0 9-2.231 9-3V9.968C16.191 11.157 13.176 12 9 12s-7.191-.843-9-2.032V12c0 .769 2.216 3 9 3z" />
      <Path d="M9 10c6.784 0 9-2.231 9-3V4.968C16.191 6.157 13.176 7 9 7s-7.191-.843-9-2.032V7c0 .769 2.216 3 9 3zM15.402 16.147C13.717 16.675 11.582 17 9 17c-4.176 0-7.191-.843-9-2.032V16c0 2.626 4.527 4 9 4 1.766 0 3.534-.217 5.035-.638a5.977 5.977 0 0 1 1.367-3.215z" />
      <Path d="M9 5c5.195 0 7.705-1.307 8.6-2.265C16.404.936 12.688 0 9 0S1.596.936.4 2.735C1.295 3.693 3.805 5 9 5zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
