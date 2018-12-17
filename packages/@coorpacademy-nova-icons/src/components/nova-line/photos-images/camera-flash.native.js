import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 1.998H6c-1.103 0-2 .896-2 2v5c0 1.102.897 2 2 2h1.117l1 8H9v1c0 1.102.897 2 2 2h2c1.103 0 2-.898 2-2v-1h.883l1-8H18c1.103 0 2-.898 2-2v-5c0-1.104-.897-2-2-2zm-4.999 18H11v-1h2.001v1zm1.116-3H9.883l-.75-6h5.734l-.75 6zM6 8.998v-5h12l.001 5H6z" />
      <Circle cx={12} cy={14.998} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
