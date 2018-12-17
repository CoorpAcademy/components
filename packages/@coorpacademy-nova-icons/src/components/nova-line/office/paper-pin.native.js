import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 8h-5v2h4v9h-2v2H5V10h3V8H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13c.265 0 .52-.105.707-.293l2-2A.997.997 0 0 0 20 20V9a1 1 0 0 0-1-1z" />
      <Path d="M7 12h9v2H7zM7 16h9v2H7zM10 6.815V10a1 1 0 1 0 2 0V6.815a2.988 2.988 0 0 0 2-2.817 2.999 2.999 0 0 0-5.999.001A2.987 2.987 0 0 0 10 6.815z" />
    </G>
  </Svg>
);

export default SvgComponent;
