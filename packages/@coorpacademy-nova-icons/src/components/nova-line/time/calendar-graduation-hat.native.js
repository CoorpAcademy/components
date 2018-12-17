import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 16.354l-3-1.5v2l1.658.829a3.003 3.003 0 0 0 2.684 0L15 16.854v-2l-3 1.5z" />
      <Path d="M18 12.354l-6-3-6 3 6 3 4.25-2.125v4.125h1.5v-4.875z" />
      <Path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <Path d="M15 3H8V1H6v6h2V5h7z" />
    </G>
  </Svg>
);

export default SvgComponent;
