import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 3.003H1v4h4zM13 7.003l3-4h-5l-3 4zM19 3.003l-3 4h7v-4zM1 19.003a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-10H1v10zm11-8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
      <Path d="M12 18.003a3.001 3.001 0 0 0 0-6 3 3 0 0 0 0 6zm0-5a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 13.003z" />
    </G>
  </Svg>
);

export default SvgComponent;
