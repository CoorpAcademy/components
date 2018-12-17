import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9c0-1.654-1.346-3-3-3S6 7.346 6 9s1.346 3 3 3 3-1.346 3-3zM8 9a1.001 1.001 0 0 1 2 0 1 1 0 0 1-2 0zM15 12c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1 1 0 0 1 0 2z" />
      <Path d="M15.292 7.292l1.413 1.413-7.999 8.002-1.413-1.414zM5 5h1V3H5c-1.103 0-2 .898-2 2v1h2V5zM8 3h3v2H8zM13 3h3v2h-3zM19 3h-1v2h1v1h2V5c0-1.102-.896-2-2-2zM5 18H3v1c0 1.103.897 2 2 2h1v-2H5v-1zM8 19h3v2H8zM13 19h3v2h-3zM19 19h-1v2h1c1.104 0 2-.897 2-2v-1h-2v1zM3 13h2v3H3zM3 8h2v3H3zM19 13h2v3h-2zM19 8h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
