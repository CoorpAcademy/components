import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 17V9l7.138 3.571A7.966 7.966 0 0 1 18 10.002V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h9.078a7.953 7.953 0 0 1 .035-8.055L5 17zm7-16l5 5h-5V1z" />
      <Path d="M18 12.002c-3.309 0-6 2.691-6 6h2c0-2.207 1.794-4 4-4s4 1.793 4 4c0 2.204-1.794 4-4 4-1.078 0-2.065-.442-2.811-1.189L17 19.002h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24.002c3.309 0 6-2.692 6-6 0-3.309-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
