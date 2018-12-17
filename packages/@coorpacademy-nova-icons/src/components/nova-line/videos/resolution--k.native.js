import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.989 20.092C15.471 19.392 13.782 19 12 19s-3.471.392-4.989 1.092A1 1 0 0 0 7.43 22h9.141a1 1 0 0 0 .418-1.908zM20 2H4c-1.103 0-2 .896-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM4 16V4h16l.001 12H4z" />
      <Path d="M11 7a1 1 0 0 0-1-1H7a1 1 0 0 0-.97.758l-1 4A.998.998 0 0 0 6 12h3v2h2v-2h1v-2h-1V7zm-2 3H7.281l.5-2H9v2zM16.558 6L15 8.22V6h-2v8h2v-2.219L16.558 14H19l-2.807-4L19 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
