import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M17 14c-2.205 0-4 1.795-4 4 0 1.103-.896 2-2 2s-2-.897-2-2h1a1 1 0 0 0 .704-1.71l-1.155-1.146C11.141 13.945 14 11.33 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 3.33 2.859 5.945 4.451 7.144L5.296 16.29A1 1 0 0 0 6 18h1c0 2.206 1.795 4 4 4s4-1.794 4-4a2 2 0 0 1 2-2c3 0 3 1.453 3 2v4h2v-4c0-1.203-.487-4-5-4zM4 8c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.682-2.814 4.959-4 5.798C6.815 12.959 4 10.682 4 8z" />
      <Path d="M9 7V5H8C6.346 5 5 6.346 5 8v1h2V8c0-.551.45-1 1-1h1z" />
    </G>
  </Svg>
);

export default SvgComponent;
