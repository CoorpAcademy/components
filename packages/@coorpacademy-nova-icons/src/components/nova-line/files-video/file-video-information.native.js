import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17l2-1.142v-5.714L6 9z" />
      <Path d="M2 2h10v4h4v2.006h2v-3.42L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h6v-2H2V2z" />
      <Path d="M17 10.006c-3.859 0-7 3.141-7 7 0 3.86 3.141 7 7 7 3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5c0 2.758-2.243 5-5 5z" />
      <Path d="M16 17.006h2v4h-2z" />
      <Circle cx={17} cy={15} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
