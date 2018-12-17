import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M14 20h2v2h-2zM12 2C9.795 2 8 3.795 8 6v1h2V6a2 2 0 0 1 4 0v13h2V6c0-2.205-1.795-4-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
