import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 1a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3zM7 11H3a2 2 0 0 0 4 0zM12 13a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zM19 13a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zM22.243 6.811L15 5H9L1.757 6.811a1 1 0 0 0-.757.97V9a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7.781a1 1 0 0 0-.757-.97zM7.976 23.217l-1.952-.433 1.999-9 1.952.433zM16.024 23.218l-2-9.001 1.953-.434 2 9zM11 16h2v7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
