import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.104 0 2-.897 2-2V8c0-1.102-.896-2-2-2zM2 17V8h20l.002 9H2z" />
      <Path d="M13.138 9l-1.079 1.799L10.979 9H8.938l2.1 3.5-2.1 3.5h2.041l1.08-1.799L13.138 16h2.041l-2.101-3.5L15.179 9zM2.813 9.875v5.25c0 .483.391.875.875.875h4.375v-1.75h-3.5v-.875h2.625v-1.75H4.563v-.875h3.5V9H3.688a.875.875 0 0 0-.875.875zM15.938 9.875v5.25c0 .483.392.875.875.875h4.375v-1.75h-3.5v-.875h2.625v-1.75h-2.625v-.875h3.5V9h-4.375a.875.875 0 0 0-.875.875z" />
    </G>
  </Svg>
);

export default SvgComponent;
