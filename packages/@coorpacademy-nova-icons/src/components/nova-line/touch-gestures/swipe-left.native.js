import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 4v1.644A11.947 11.947 0 0 0 11.5 3a11.968 11.968 0 0 0-9.256 4.363l1.542 1.273A9.979 9.979 0 0 1 11.5 5c2.189 0 4.276.716 5.989 2H16v2h5V4h-2z" />
      <Path d="M15.316 14.052L13 13.279V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H7a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM14 19H9.618l-1-2H9a1 1 0 0 0 1-1v-6h1v4a1 1 0 0 0 .684.949l2.316.772V19z" />
    </G>
  </Svg>
);

export default SvgComponent;
