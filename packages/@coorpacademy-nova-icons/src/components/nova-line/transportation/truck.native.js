import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M23 13H11V3H9v5H4c-1.103 0-2 .896-2 2v3c-1.103 0-2 .896-2 2v4a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.816-2h6.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.816-2H22c1.103 0 2-.896 2-2v-4a1 1 0 0 0-1-1zM6 20c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm12 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm4-2h-1.184c-.415-1.162-1.514-2-2.816-2s-2.401.838-2.815 2H8.816C8.401 16.838 7.302 16 6 16s-2.401.838-2.815 2H2v-3h1a1 1 0 0 0 1-1v-4h5v4a1 1 0 0 0 1 1h12v3z" />
      <Path d="M5 11h2v2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
