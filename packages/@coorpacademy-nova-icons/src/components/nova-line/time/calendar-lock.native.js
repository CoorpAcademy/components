import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 12v-.63c0-1.654-1.346-3-3-3s-3 1.346-3 3V12H8v6h8v-6h-1zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4h-2v-.63c0-.551.449-1 1-1s1 .449 1 1V12z" />
      <Path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <Path d="M15 3H8V1H6v6h2V5h7z" />
    </G>
  </Svg>
);

export default SvgComponent;
