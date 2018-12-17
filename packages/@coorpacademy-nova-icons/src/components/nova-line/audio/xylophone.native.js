import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 2H3c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM3 20V4h2l.001 16H3zM14 6c0-1.102-.897-2-2-2h-2c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6zm-4 12V6h2l.001 12H10zM17 8h2v1h2V8c0-1.102-.897-2-2-2h-2c-1.103 0-2 .898-2 2v5h2V8z" />
      <Path d="M21.958 10.376a2.513 2.513 0 0 0-3.503.572c-.679.942-.6 2.193.104 3.052l-4.648 8.521 1.756.958 4.673-8.566a2.503 2.503 0 0 0 2.188-1.032 2.515 2.515 0 0 0-.57-3.505z" />
    </G>
  </Svg>
);

export default SvgComponent;
