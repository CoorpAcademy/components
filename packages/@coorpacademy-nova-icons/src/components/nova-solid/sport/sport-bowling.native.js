import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M8 5a2 2 0 0 0-4 0v3h4V5zM8 9H4c0 3-2 4-2 8s2 7 3 7h2c.524 0 1.322-.83 1.964-2.191A7.956 7.956 0 0 1 8 18c0-1.66.506-3.203 1.373-4.481C8.787 11.977 8 10.882 8 9zM16 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-2 4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-3a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
