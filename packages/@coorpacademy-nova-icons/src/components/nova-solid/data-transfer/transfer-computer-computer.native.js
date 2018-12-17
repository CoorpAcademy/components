import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 16.001H2v-6h1v-2H2a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-5h-2v2zM23 .002H13a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4v1h-3v2h8v-2h-3v-1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 1.999v4h-8v-4h8z" />
      <Path d="M9 5.002h2v-2H8a1 1 0 0 0-1 1v3H4l4 4 4-4H9v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
