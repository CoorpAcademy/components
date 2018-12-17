import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M4 20a2 2 0 0 0 4 0v-5H4v5zM16 20a2 2 0 0 0 4 0v-5h-4v5zM9 10H7V2H5v8H3V2H1v8c0 1.102.897 2 2 2h2v2h2v-2h2c1.103 0 2-.898 2-2V2H9v8zM22.614 10.713l-2.04-6.797a2.687 2.687 0 0 0-5.148 0l-2.04 6.797A.998.998 0 0 0 14.344 12H17v2h2v-2h2.656a.997.997 0 0 0 .958-1.287z" />
    </G>
  </Svg>
);

export default SvgComponent;
