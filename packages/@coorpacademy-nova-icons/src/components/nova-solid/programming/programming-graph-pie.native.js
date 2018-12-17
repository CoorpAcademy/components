import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.898 0 5v11h24V5c0-1.102-.896-2-2-2zM8 13a3 3 0 0 1 0-6v3h3a3 3 0 0 1-3 3zm1-4V6c1.656 0 3 1.344 3 3H9zm10 5h-6v-2h6v2zm0-3h-4V9h4v2zm0-3h-3V6h3v2zM.001 18c0 1.103.897 2 2 2h9v2h-4v2h10v-2h-4v-2h9c1.104 0 2-.897 2-2v-1h-24v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
