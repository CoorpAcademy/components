import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 6V2c0-1.102-.897-2-2-2H2C.897 0 0 .898 0 2v16c0 1.104.897 2 2 2V6h10zm-2-4v2H2V2h8z" />
      <Path d="M22 8H6c-1.103 0-2 .898-2 2v8c0 1.104.897 2 2 2h4V10h8v5h2v-5h2v8h-2v2h2c1.103 0 2-.896 2-2v-8c0-1.102-.897-2-2-2zM8 18H6v-8h2v8z" />
      <Path d="M15 16h-2v4h-2l2 4h5v-4l-3-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
