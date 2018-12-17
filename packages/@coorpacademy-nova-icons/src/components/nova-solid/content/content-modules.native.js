import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.001h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zM10 13.001H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zM20 13.001h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
