import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.931 13A7.994 7.994 0 0 0 13 6.069V2h-2v4.069A7.995 7.995 0 0 0 4.069 13H2v2h20v-2h-2.069zM11 21.931v-1.209A1.99 1.99 0 0 1 10 19a2 2 0 0 1 4 0c0 .738-.405 1.376-1 1.722v1.209A7.998 7.998 0 0 0 19.738 16H4.262A7.998 7.998 0 0 0 11 21.931z" />
    </G>
  </Svg>
);

export default SvgComponent;
