import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M16.989 20.093C15.471 19.392 13.782 19 12 19s-3.471.392-4.989 1.093A1 1 0 0 0 7.43 22h9.141a1 1 0 0 0 .418-1.907zM7 6h2v2H7zM11 6h2v2h-2zM15 6h2v2h-2zM9 8h2v2H9zM13 8h2v2h-2zM7 10h2v2H7zM11 10h2v2h-2zM15 10h2v2h-2zM9 12h2v2H9zM13 12h2v2h-2z" />
      <Path d="M20 2H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM4 16V4h16l.001 12H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
