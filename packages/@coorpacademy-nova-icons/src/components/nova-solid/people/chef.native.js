import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2a2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0c0 .157.023.309.057.455L7 10c0 2.757 2.243 5 5 5s5-2.243 5-5l.943-7.545C17.978 2.309 18 2.157 18 2zm-6 11c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3zM8 16.705c-2.468.974-4 2.886-4 5.295v2h4v-7.295zM12 16c-1.085 0-2.089.137-3 .381V24h11v-2c0-3.533-3.29-6-8-6zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
