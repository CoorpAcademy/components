import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M8 9h8v5H8z" />
      <Path d="M21 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM14.838 17.25H12.75V15h-1.5v2.25H9.162L8.881 15H7.369l.777 6.217a1.753 1.753 0 0 0 1.736 1.533h4.234c.881 0 1.627-.659 1.736-1.533L16.631 15h-1.512l-.281 2.25zm-3.588 4H9.883a.25.25 0 0 1-.248-.219L9.35 18.75h1.9v2.5zm3.115-.219a.25.25 0 0 1-.248.219H12.75v-2.5h1.9l-.285 2.281z" />
    </G>
  </Svg>
);

export default SvgComponent;
