import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 1H3a2 2 0 0 0-2 2v8h10V1zM7 9H5V7H3V5h2V3h2v2h2v2H7v2zM13 23h8c1.104 0 2-.897 2-2v-8H13v10zm2-8h6v2h-6v-2zm6 4v2h-6v-2h6zM1 13v8c0 1.103.896 2 2 2h8V13H1zm7.707 6.293l-1.414 1.413L6 19.415l-1.293 1.292-1.414-1.413L4.586 18l-1.293-1.294 1.414-1.413L6 16.587l1.293-1.294 1.414 1.413L7.414 18l1.293 1.293zM21 1h-8v10h10V3a2 2 0 0 0-2-2zm0 6h-6V5h6v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
