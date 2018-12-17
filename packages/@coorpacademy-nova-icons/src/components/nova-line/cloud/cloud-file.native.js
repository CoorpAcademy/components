import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.568 0 1.129.167 1.619.482a1 1 0 0 0 1.516-.615A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5 0 1.13-.391 2.162-1.025 3h2.34c.435-.91.685-1.926.685-3 0-3.859-3.141-7-7-7a6.962 6.962 0 0 0-6.438 4.254A4.924 4.924 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h8v-2z" />
      <Path d="M23 24h-7a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h4c.266 0 .52.105.707.293l3 3A.996.996 0 0 1 24 16v7a1 1 0 0 1-1 1zm-6-2h5v-5.586L19.586 14H17v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
