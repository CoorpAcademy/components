import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 7.432V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.432C1.201 8.217 0 9.998 0 12s1.201 3.785 3 4.568V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432c1.799-.784 3-2.565 3-4.568s-1.201-3.783-3-4.568zm-1.251 7.459a1 1 0 0 0-.749.968V18H5v-2.142a1 1 0 0 0-.749-.968C2.926 14.547 2 13.359 2 12s.926-2.547 2.251-2.89A1 1 0 0 0 5 8.142V6h14v2.142a1 1 0 0 0 .749.968C21.074 9.454 22 10.642 22 12s-.926 2.547-2.251 2.891z" />
      <Path d="M12 9c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3v1H8v2h1v2H8v2h7v-2h-4v-2h2v-2h-2v-1c0-.551.449-1 1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
