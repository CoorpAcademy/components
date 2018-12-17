import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 6h3v5h-3zM18 12h3v5h-3zM4 12h2v5h2v-3h2v3h2v-5h2L9 8z" />
      <Path d="M15 4H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM3 22V6h12l.001 16H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
