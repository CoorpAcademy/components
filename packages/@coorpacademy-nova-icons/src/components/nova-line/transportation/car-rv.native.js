import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M11 11h3v3h-3zM16 11h3v3h-3z" />
      <Path d="M21 5H8a1 1 0 0 0-.874.514l-5 9A.997.997 0 0 0 2 15v4a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.815-2h3.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.815-2H21a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM4 15.261L4.144 15H7v-2H5.255l.556-1H8v4a2.993 2.993 0 0 0-2.815 2H4v-2.739zM8 20c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2h-.185c-.414-1.162-1.514-2-2.815-2s-2.401.838-2.815 2h-3.369a2.979 2.979 0 0 0-.815-1.22V11a1 1 0 0 0-1-1H6.922l1.667-3H20v11z" />
    </G>
  </Svg>
);

export default SvgComponent;
