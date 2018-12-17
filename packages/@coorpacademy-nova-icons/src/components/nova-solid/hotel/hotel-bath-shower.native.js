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
      <Path d="M22 14V4c0-1.654-1.346-3-3-3h-7v3h2V3h5c.551 0 1 .449 1 1v10H0v2h24v-2h-2zM5.086 20.885L3.5 23H6l1.5-2h9l1.5 2h2.5l-1.586-2.115A3.993 3.993 0 0 0 22 17H2a3.993 3.993 0 0 0 3.086 3.885z" />
    </G>
  </Svg>
);

export default SvgComponent;
