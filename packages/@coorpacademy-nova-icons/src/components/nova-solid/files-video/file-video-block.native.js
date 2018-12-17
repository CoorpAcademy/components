import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 17V9l7.138 3.571A7.966 7.966 0 0 1 18 10.002V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h9.078a7.947 7.947 0 0 1 .035-8.054L5 17zm7-16l5 5h-5V1z" />
      <Path d="M18 12.002c-3.309 0-6 2.69-6 6 0 3.308 2.691 6 6 6s6-2.692 6-6c0-3.31-2.691-6-6-6zm-4 6c0-2.207 1.794-4 4-4 .739 0 1.425.215 2.02.566l-5.453 5.453A3.96 3.96 0 0 1 14 18.002zm4 4a3.95 3.95 0 0 1-2.019-.567l5.452-5.453a3.95 3.95 0 0 1 .566 2.02 4.004 4.004 0 0 1-3.999 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
