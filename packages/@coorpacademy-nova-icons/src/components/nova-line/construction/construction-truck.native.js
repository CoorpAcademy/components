import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M23 8H11a1 1 0 0 0-1 1v8H8.815A2.969 2.969 0 0 0 8 15.781V9a1 1 0 0 0-1-1H4c-2.206 0-4 1.795-4 4v6a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.815-2h7.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.815-2H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM2 12c0-1.104.897-2 2-2h2v5a2.993 2.993 0 0 0-2.815 2H2v-5zm4 7c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm13 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2h-.185c-.414-1.162-1.514-2-2.815-2s-2.401.838-2.815 2H12v-7h2v3h2v-3h2v3h2v-3h2v7z" />
      <Path d="M3 11h2v2H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
