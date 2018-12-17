import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 17v2c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-2H3zM20 12H4a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4zM21 11V9c0-2.757-2.243-5-5-5H8C5.243 4 3 6.243 3 9v2h18zm-4.25-3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM14 5.5A.75.75 0 1 1 14 7a.75.75 0 0 1 0-1.5zM12 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM9.75 5.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM7.25 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
