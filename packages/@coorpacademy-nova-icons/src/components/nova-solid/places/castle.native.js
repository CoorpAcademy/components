import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M8 11l-.364 2h8.728L16 11a2 2 0 0 0 2-2V5h-2v2h-3V5h-2v2H8V5H6v4a2 2 0 0 0 2 2zM1 14v3h1v4a1 1 0 0 0 1 1h7v-2a2 2 0 0 1 4 0v2h7a1 1 0 0 0 1-1v-4h1v-3H1z" />
    </G>
  </Svg>
);

export default SvgComponent;
