import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM18 15.102V1.001a1 1 0 0 0-1-1H6v20h8a5.002 5.002 0 0 1 4-4.899zM16 19.001h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
