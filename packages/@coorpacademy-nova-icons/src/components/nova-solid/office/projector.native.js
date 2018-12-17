import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10h-1l-1 4h3zM5 14h2.5l2.5-4H8.5zM14.5 10H13l2.5 4H18z" />
      <Path d="M19 6h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10v8H3v7h18V8c0-1.102-.897-2-2-2zm-7.5 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 6zM14 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
