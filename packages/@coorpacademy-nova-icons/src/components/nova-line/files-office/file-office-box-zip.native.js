import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 10.75h.875v3.5H10V16h3.5v-1.75h-.875v-3.5h.875V9H10zM18.375 9H15.75v7h1.75v-1.75h.875A2.628 2.628 0 0 0 21 11.625 2.629 2.629 0 0 0 18.375 9zm0 3.5H17.5v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875zM8.104 10.361A.877.877 0 0 0 7.375 9H3v1.75h2.74l-2.593 3.89A.875.875 0 0 0 3.875 16H8.25v-1.75H5.51l2.594-3.889z" />
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
