import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 10.001H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zM14 6.001h-4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1zM21 11.001h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
