import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M15 4h-1V2h-2v2H9a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-2 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zM21 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zM5 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
