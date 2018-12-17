import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 7.002h-2v1.051c-1.14.233-2 1.242-2 2.449 0 1.379 1.121 2.5 2.5 2.5h1c.275 0 .5.225.5.5s-.225.5-.5.5H9v2h2v1h2v-1.051c1.14-.232 2-1.242 2-2.449 0-1.379-1.121-2.5-2.5-2.5h-1a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5H15v-2h-2v-1z" />
      <Path d="M17 1.002a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .986v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.103-.897 2-2 2H8c-1.102 0-2-.897-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
