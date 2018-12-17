import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M16 9h-3V5h3V3H8v2h3v4H8c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2v1h2v-1h4v1h2v-1c1.103 0 2-.897 2-2v-9c0-1.104-.897-2-2-2zM8 20v-9h8l.001 9H8z" />
      <Path d="M10 14h2v1h2v-3h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
