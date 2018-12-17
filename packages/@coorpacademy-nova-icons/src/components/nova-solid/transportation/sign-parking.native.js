import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M13 4H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h2c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 8h-2V8h2c1.104 0 2 .898 2 2 0 1.102-.896 2-2 2z"
    />
  </Svg>
);

export default SvgComponent;
