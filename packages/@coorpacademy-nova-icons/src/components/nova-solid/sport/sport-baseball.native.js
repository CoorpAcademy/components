import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={19.443} cy={20.557} r={2} />
      <Path d="M19.787 7.052a2.702 2.702 0 0 0-4.797-1.841l-7.305 9.688L9.1 16.314l9.689-7.305a2.703 2.703 0 0 0 .998-1.957zM4.15 18.435a.999.999 0 1 0-1.414 1.414l1.414 1.414a.999.999 0 1 0 1.414-1.414L4.15 18.435zM6.271 19.14l-1.414-1.415 2.122-2.12 1.414 1.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
