import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.316 15.052L11 14.279V8H9v5.612l-1-.333V9H6v7H5a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM12 20H7.618l-1-2H7a1 1 0 0 0 1-1v-1.612l4 1.333V20zM22 16v1c0 1.104-.897 2-2 2h-1.586l1.293-1.293-1.414-1.414-3 3a.999.999 0 0 0 0 1.414l3 3 1.414-1.414L18.414 21H20c2.206 0 4-1.794 4-4v-1h-2zM4.293 6.293l1.414 1.414 3-3a.999.999 0 0 0 0-1.414l-3-3-1.414 1.414L5.586 3H4C1.794 3 0 4.795 0 7v1h2V7c0-1.102.897-2 2-2h1.586L4.293 6.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
