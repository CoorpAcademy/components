import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 6H9.678L7.929 1.628l-1.858.743L7.522 6H6a1 1 0 0 0-1 1v4c0 .527.379 1 1.095 1l.91 9.1A1 1 0 0 0 8 22h8a1 1 0 0 0 .995-.9l.91-9.1c.716 0 1.095-.474 1.095-1V7a1 1 0 0 0-1-1zM7 8h10v2H7V8zm8.096 12H8.904l-.799-8h7.789l-.798 8z" />
      <Circle cx={12} cy={16} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
