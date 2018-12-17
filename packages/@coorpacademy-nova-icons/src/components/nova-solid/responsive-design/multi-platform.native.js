import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 10h2V7c0-1.103-.897-2-2-2h-9v2h9v3zM13 18h1v-4H3v2c0 1.103.897 2 2 2h6v1H8v2h7v-2h-2v-1zM23 12h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1zm-1 8h-4v-6h4v6zM8 11V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zM4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
