import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={13} cy={6} r={1} />
      <Circle cx={11} cy={8.5} r={1} />
      <Circle cx={15} cy={8.5} r={1} />
      <Circle cx={13} cy={11} r={1} />
      <Circle cx={9} cy={11} r={1} />
      <Circle cx={17} cy={11} r={1} />
      <Path d="M24 14h-2V4c0-1.654-1.346-3-3-3h-7v3h2V3h5c.551 0 1 .449 1 1v10H0v2h2v1a4 4 0 0 0 3.086 3.885L3.5 23H6l1.5-2h9l1.5 2h2.5l-1.586-2.115A4 4 0 0 0 22 17v-1h2v-2zm-4 3c0 1.103-.897 2-2 2H6c-1.103 0-2-.897-2-2v-1h16v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
