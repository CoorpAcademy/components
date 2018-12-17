import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.316 15.052L17 14.279V8h-2v5.612l-1-.333V9h-2v7h-1a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM18 20h-4.382l-1-2H13a1 1 0 0 0 1-1v-1.612l4 1.333V20zM4.293 17.707L5.586 19H4c-1.103 0-2-.896-2-2v-1H0v1c0 2.206 1.794 4 4 4h1.586l-1.293 1.293 1.414 1.414L9.414 20l-3.707-3.707-1.414 1.414zM20 3h-1.586l1.293-1.293L18.293.293 14.586 4l3.707 3.707 1.414-1.414L18.414 5H20c1.103 0 2 .898 2 2v1h2V7c0-2.205-1.794-4-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
