import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 10h-2v1.05c-1.14.232-2 1.243-2 2.45 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.05c1.14-.233 2-1.242 2-2.45 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15v-2h-2v-1z" />
      <Path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
    </G>
  </Svg>
);

export default SvgComponent;
