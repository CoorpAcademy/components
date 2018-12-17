import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
      <Path d="M12 10c-1.654 0-3 1.346-3 3h2a1.001 1.001 0 1 1 1 1h-1v2h2v-.171A3.007 3.007 0 0 0 15 13c0-1.654-1.346-3-3-3z" />
      <Circle cx={12} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
