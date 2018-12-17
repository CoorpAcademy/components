import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.707.293l-1.414 1.414L18.586 3H15v2h3.586l-1.293 1.293 1.414 1.414L22.414 4zM13.316 15.052L11 14.279V11a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5H5a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM12 20H7.618l-1-2H7a1 1 0 0 0 1-1v-5h1v3a1 1 0 0 0 .684.949l2.316.772V20z" />
      <Path d="M8.5 5a7.464 7.464 0 0 0-7.308 5.808l1.948.45C3.719 8.751 5.923 7 8.5 7s4.781 1.751 5.36 4.258l1.948-.45A7.464 7.464 0 0 0 8.5 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
