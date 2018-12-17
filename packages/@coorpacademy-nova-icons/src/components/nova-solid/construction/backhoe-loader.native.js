import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M20 16H10a3 3 0 1 0 0 6h10a3 3 0 0 0 0-6zm-10 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM3.613 8.477L7 5.09l4 4V15h10v-3a1 1 0 0 0-1-1h-2V7a2 2 0 0 0-2-2h-3c-.513 0-.977.199-1.331.518l-3.608-3.61a1.501 1.501 0 0 0-2.121 0L1.203 6.297l.01.014c-.886.97-1.292 2.341-.934 3.705a3.999 3.999 0 0 0 4.885 2.852A3.957 3.957 0 0 0 7 11.783L3.613 8.477zM13 7h3v3h-3V7z" />
    </G>
  </Svg>
);

export default SvgComponent;
