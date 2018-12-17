import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 9.294V.999a1.001 1.001 0 0 0-1.448-.896l-3.48 1.743L8.555.168a1.003 1.003 0 0 0-1.109 0L4.929 1.847 1.447.104A1.002 1.002 0 0 0 0 .999v18c0 .348.18.668.475.852.295.181.663.197.973.042l3.481-1.74 2.517 1.678a1 1 0 0 0 1.109 0L11 18.201V16a6.998 6.998 0 0 1 5-6.706zm-5-1.295H7.5A.502.502 0 0 0 7.5 9h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.217-2 2.45V15H7v-1H5v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 5 8.5c0-1.208.86-2.217 2-2.45V4.999h2v1h2v2z" />
      <Path d="M23 19v-3a5.007 5.007 0 0 0-4-4.898V10h-2v1.102A5.007 5.007 0 0 0 13 16v3h-1v2h12v-2h-1zM18 24c1.104 0 2-.897 2-2h-4c0 1.103.896 2 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
