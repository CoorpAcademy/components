import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 6a7 7 0 1 0 0 14A7 7 0 0 0 9 6zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM16 18l-2 2h6l2-2z" />
      <Circle cx={9} cy={13} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
