import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={13} cy={18} r={2} />
      <Circle cx={20} cy={18} r={2} />
      <Path d="M8 15v-3.041a1.001 1.001 0 0 0-1.76-.65l-6 7a.999.999 0 0 0 .76 1.65h4A3.001 3.001 0 0 0 7.996 17H8v-2zM22 4h-4a2 2 0 0 0-2 2v4h-4a2 2 0 0 0-2 2v3H9v2h1.184c.414-1.162 1.513-2 2.816-2s2.403.838 2.816 2h1.367c.414-1.162 1.513-2 2.816-2s2.403.838 2.816 2H24V6a2 2 0 0 0-2-2zm-1 5h-3V6h3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
