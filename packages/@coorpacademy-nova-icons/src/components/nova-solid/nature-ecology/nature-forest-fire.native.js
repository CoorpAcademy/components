import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M17 14.101V10l2.4 1.8 1.2-1.6L17 7.5V5l2.4 1.8 1.2-1.6L16 1.75 11.4 5.2l1.2 1.6L15 5v2.5l-3.6 2.7 1.2 1.6L15 10v5.023a4.956 4.956 0 0 1 2-.922zM8.746 14.56L6 12.5V10l2.4 1.8 1.2-1.6L6 7.5V5l2.4 1.8 1.2-1.6L5 1.75.4 5.2l1.2 1.6L4 5v2.5L.4 10.2l1.2 1.6L4 10v2.5L.4 15.2l1.2 1.6L4 15v7h2v-7l1.141.856a4.977 4.977 0 0 1 1.605-1.296zM9.934 18.667v-1.805a2.711 2.711 0 0 0-1.601 2.471 2.666 2.666 0 1 0 5.334 0c0-1.374 0-2.666-2.667-5.333.889 3.556-1.066 4.667-1.066 4.667zM18 14c.889 3.556-1.066 4.667-1.066 4.667v-1.805a2.711 2.711 0 0 0-1.601 2.471 2.666 2.666 0 1 0 5.334 0c0-1.374 0-2.666-2.667-5.333z" />
    </G>
  </Svg>
);

export default SvgComponent;
