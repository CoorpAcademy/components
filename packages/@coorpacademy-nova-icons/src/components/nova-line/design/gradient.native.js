import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M21 2H3c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM3 20V4h18l.001 16H3z" />
      <Path d="M5 10h2v2H5zM9 10h2v2H9zM13 10h2v2h-2zM17 10h2v2h-2zM5 14h2v2H5zM7 12h2v2H7zM11 12h2v2h-2zM15 12h2v2h-2zM9 14h2v2H9zM13 14h2v2h-2zM17 14h2v2h-2zM7 16h2v2H7zM11 16h2v2h-2zM15 16h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
