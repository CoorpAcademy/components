import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2h15v4h2V2c0-1.102-.897-2-2-2H2C.897 0 0 .898 0 2v15c0 1.103.897 2 2 2h4v-2H2V2z" />
      <Path d="M10 12h6v2h-6z" />
      <Path d="M21.207 19.793l-3.322-3.322A5.959 5.959 0 0 0 19 13c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.294 0 2.49-.416 3.471-1.115l3.322 3.321 1.414-1.413zM9 13c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
