import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Circle cx={18} cy={19} r={2} />
      <Circle cx={6} cy={19} r={2} />
      <Path d="M23 12h-9V8a1 1 0 0 0-1-1H8.354a2 2 0 0 0-1.857 1.257L5 12H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h2.184c.413-1.162 1.512-2 2.816-2s2.403.838 2.816 2h6.367c.414-1.162 1.513-2 2.816-2s2.403.838 2.816 2H22a2 2 0 0 0 2-2v-3a1 1 0 0 0-1-1zm-11 0H7l1-3h4v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
