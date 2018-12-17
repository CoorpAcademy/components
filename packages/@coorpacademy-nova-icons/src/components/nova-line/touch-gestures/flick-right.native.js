import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 7v3h-3v2h5V7z" />
      <Path d="M16.504 7h-1.489v2h5V4h-2v1.644A11.949 11.949 0 0 0 10.515 3a11.972 11.972 0 0 0-9.257 4.363L2.8 8.637A9.98 9.98 0 0 1 10.515 5c2.189 0 4.277.716 5.989 2z" />
      <Path d="M15.316 14.052L13 13.279V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H7a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM14 19H9.618l-1-2H9a1 1 0 0 0 1-1v-6h1v4a1 1 0 0 0 .684.949l2.316.772V19z" />
    </G>
  </Svg>
);

export default SvgComponent;
