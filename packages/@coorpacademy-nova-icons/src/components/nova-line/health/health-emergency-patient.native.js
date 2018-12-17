import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 4.001v-2H9v2H5v-2H3v2a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1v2h2v-2h4v2h2v-2a1 1 0 0 0 1-1V5.001a1 1 0 0 0-1-1zM10 11H4V6.001h6V11zm-6 2h6v5H4v-5z" />
      <Circle cx={7} cy={9} r={2} />
      <Path d="M22 9h-3V6.001h-2V9h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
