import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M19 6H7c-1.103 0-2 .896-2 2v7H1v4h2v-2h2v2h8.185c.414 1.162 1.514 2 2.815 2s2.401-.838 2.815-2H19c1.103 0 2-.896 2-2V8c0-1.104-.897-2-2-2zm-3 13c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2h-.185c-.414-1.162-1.514-2-2.815-2s-2.401.838-2.815 2H7V8h12v9z" />
      <Path d="M8 9h4v7H8zM14 9h4v4h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
