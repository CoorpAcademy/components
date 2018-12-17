import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13.001 6h2v4h-2zM17.001 4h2v6h-2zM21.001 2h2v8h-2z"
    />
    <G fill="currentColor">
      <Circle cx={7.001} cy={5} r={3} />
      <Path d="M7.001 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5z" />
    </G>
    <Path fill="currentColor" d="M13.001 11h10v2h-10z" />
  </Svg>
);

export default SvgComponent;
