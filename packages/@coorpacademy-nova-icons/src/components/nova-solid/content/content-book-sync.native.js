import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 20.001h4.262a8.045 8.045 0 0 1-.262-2 8 8 0 0 1 8-8v-9a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <Path d="M18 12.001c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19.001h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24.001c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
