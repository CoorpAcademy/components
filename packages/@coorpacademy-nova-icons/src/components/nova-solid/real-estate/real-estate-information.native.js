import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 15h2v4h-2z" />
      <Circle cx={12} cy={13} r={1} />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM12 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
