import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M22 7a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723V16h-1v2h2a1 1 0 0 0 1-1V8.723c.596-.347 1-.985 1-1.723zM3 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7H3v7zm10-4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM5.001 17h5v2h-5v-2zM3 13h14V6H3v7zm10-6h2v5h-2V7zM9 7h2v5H9V7zM5.001 7h2v5h-2V7zM16 2H4a1 1 0 0 0-1 1v2h14V3a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
