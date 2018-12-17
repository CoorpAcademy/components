import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 3.003H1v4h4zM13 7.003l3-4h-5l-3 4zM19 3.003l-3 4h7v-4zM1 19.003a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-10H1v10zm6-8l5 3.333v-3.333l6 4-6 4V15.67l-5 3.333v-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
