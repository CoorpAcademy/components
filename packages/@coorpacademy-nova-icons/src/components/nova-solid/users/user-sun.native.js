import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24.001 5h-2.142a3.993 3.993 0 0 0-2.858-2.857V0h-2v2.143A3.993 3.993 0 0 0 14.143 5h-2.142v2h2.142a3.996 3.996 0 0 0 2.858 2.858V12h2V9.858A3.996 3.996 0 0 0 21.859 7h2.142V5zm-6 3c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2z" />
      <Circle cx={7.001} cy={5} r={3} />
      <Path d="M7.001 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
