import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 5h2v2h3V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3h3V5zM22.819 17.742L16 8H8l-6.819 9.742a.996.996 0 0 0-.181.573V21a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2.685a.996.996 0 0 0-.181-.573zM9 10h6v2H9v-2zm-2 4h10v2H7v-2zm12 6H5v-2h14v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
