import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 7.001h-1v-1h-2v1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6v-1H4v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1zm-11-1h4v1h-4v-1zm10 13H4v-10h16v10z" />
      <Path d="M6 11.001h2v6H6zM11 11.001h2v6h-2zM16 11.001h2v6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
