import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.5 8H11V6H9V5H7v1.05c-1.14.233-2 1.242-2 2.45C5 9.878 6.121 11 7.5 11h1a.5.5 0 0 1 0 1H5v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.45C11 10.122 9.879 9 8.5 9h-1a.5.5 0 0 1 0-1z" />
      <Path d="M16 15V1a1 1 0 0 0-1.448-.895l-3.48 1.742L8.555.168a1 1 0 0 0-1.109 0L4.928 1.847 1.448.105A1 1 0 0 0 0 1v18c0 .347.18.668.475.852a1.005 1.005 0 0 0 .972.042l3.48-1.74 2.518 1.678a1 1 0 0 0 1.109 0l2.517-1.678 1.929.965v-2.237l-1.553-.777a1.001 1.001 0 0 0-1.002.063L8 17.798l-2.445-1.63a1.004 1.004 0 0 0-1.002-.063L2 17.382V2.619l2.553 1.274a1 1 0 0 0 1.002-.062L8 2.202l2.445 1.63a1 1 0 0 0 1.002.062L14 2.619V15h2zM22.293 16.294L18 20.586l-2.293-2.292-1.414 1.414L18 23.414l5.707-5.706z" />
    </G>
  </Svg>
);

export default SvgComponent;
