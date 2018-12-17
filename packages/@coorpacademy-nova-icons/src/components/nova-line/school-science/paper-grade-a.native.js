import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 0H6C4.897 0 4 .898 4 2v20c0 1.104.897 2 2 2h8c.819 0 1.835-.42 2.414-1L21 18.414c.58-.579 1-1.595 1-2.414V2c0-1.102-.897-2-2-2zM6 22V2h14v14h-3c-1.654 0-3 1.346-3 3v3H6zm10-1.414V19c0-.551.449-1 1-1h1.586L16 20.586z" />
      <Path d="M9.5 8.5H11V10h1.5V4.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V10h1.5V8.5zm1.5-3V7H9.5V5.5H11zM8 12h10v2H8zM8 16h4v2H8zM14 8h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
