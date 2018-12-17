import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 16v1h2v-1.05c1.14-.233 2-1.243 2-2.45 0-.565-.195-1.081-.513-1.5.318-.418.513-.934.513-1.5 0-1.208-.86-2.217-2-2.45V7h-2v1H9v8h2zm1.5-2H11v-1h1.5a.5.5 0 0 1 0 1zm.5-3.5a.5.5 0 0 1-.5.5H11v-1h1.5a.5.5 0 0 1 .5.5z" />
      <Path d="M22 9V7h-2V6c0-1.103-.897-2-2-2h-1V2h-2v2h-2V2h-2v2H9V2H7v2H6c-1.103 0-2 .898-2 2v1H2v2h2v2H2v2h2v2H2v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1h2v-2h-2v-2h2v-2h-2V9h2zm-4.003 9H6V6h12l-.003 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
