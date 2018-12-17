import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M6 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4c3.86 0 7 3.14 7 7v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4C23 8.626 15.374 1 6 1zm15 20h-6v-3c0-4.962-4.038-9-9-9H3V3h3c8.271 0 15 6.729 15 15v3z" />
      <Path d="M6.514 7.012c1.09.05 2.16.26 3.18.624l.671-1.883a12.949 12.949 0 0 0-3.758-.738l-.093 1.997zM16.989 17.496l1.998-.09a12.957 12.957 0 0 0-.734-3.76l-1.885.67c.363 1.02.571 2.091.621 3.18zM13.743 7.557l-1.192 1.605c.873.648 1.644 1.42 2.292 2.294l1.606-1.191a13.106 13.106 0 0 0-2.706-2.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
