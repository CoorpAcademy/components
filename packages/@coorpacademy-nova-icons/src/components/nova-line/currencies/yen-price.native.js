import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 7.432V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.432C1.201 8.217 0 9.998 0 12s1.201 3.785 3 4.568V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432c1.799-.784 3-2.565 3-4.568s-1.201-3.783-3-4.568zm-1.251 7.459a1 1 0 0 0-.749.968V18H5v-2.142a1 1 0 0 0-.749-.968C2.926 14.547 2 13.359 2 12s.926-2.547 2.251-2.89A1 1 0 0 0 5 8.142V6h14v2.142a1 1 0 0 0 .749.968C21.074 9.454 22 10.642 22 12s-.926 2.547-2.251 2.891z" />
      <Path d="M14.895 8.448l-1.79-.895L12 9.765l-1.105-2.212-1.79.895L10.882 12H9v2h2v3h2v-3h2v-2h-1.882z" />
    </G>
  </Svg>
);

export default SvgComponent;
