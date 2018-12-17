import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M1.999 21.998h16v2h-16zM9.399 8.798a1 1 0 0 0 1.2 0c.735-.551 4.4-3.421 4.4-5.801 0-1.654-1.346-3-3-3-.768 0-1.469.291-2 .766a2.987 2.987 0 0 0-2-.766c-1.654 0-3 1.346-3 3 0 2.38 3.665 5.251 4.4 5.801zM17.999 10.998h-1a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v6c0 1.488.47 2.866 1.264 4h11.475a6.978 6.978 0 0 0 .967-2H18c2.205 0 4-1.795 4-4a4.007 4.007 0 0 0-4.001-4zm0 6h-1v-4h1a2 2 0 0 1 0 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
