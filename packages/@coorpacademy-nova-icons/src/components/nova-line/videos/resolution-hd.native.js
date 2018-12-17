import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.989 20.092C15.471 19.392 13.782 19 12 19s-3.471.392-4.989 1.092A1 1 0 0 0 7.43 22h9.141a1 1 0 0 0 .418-1.908zM20 2H4c-1.103 0-2 .896-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM4 16V4h16l.001 12H4z" />
      <Path d="M15 6h-2v8h2c2.206 0 4-1.795 4-4s-1.794-4-4-4zm0 6V8c1.103 0 2 .898 2 2 0 1.104-.897 2-2 2zM9 9H7V6H5v8h2v-3h2v3h2V6H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
