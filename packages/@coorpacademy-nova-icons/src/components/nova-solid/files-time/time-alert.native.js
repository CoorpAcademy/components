import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 0C4.038 0 0 4.038 0 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm2.445 11.832L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM20.004 14h2v6h-2z" />
      <Circle cx={21.004} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
