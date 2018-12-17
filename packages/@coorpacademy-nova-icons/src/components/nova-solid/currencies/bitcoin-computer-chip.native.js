import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.5 13.003H11v1h1.5a.5.5 0 0 0 0-1z" />
      <Path d="M22 9.003v-2h-2v-1c0-1.102-.897-2-2-2h-1v-2h-2v2h-2v-2h-2v2H9v-2H7v2H6c-1.103 0-2 .898-2 2v1H2v2h2v2H2v2h2v2H2v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1h2v-2h-2v-2h2v-2h-2v-2h2zm-7 4.5c0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-8h2v-1h2v1.051c1.14.232 2 1.243 2 2.449 0 .566-.195 1.082-.513 1.5.318.419.513.935.513 1.5z" />
      <Path d="M11 11.003h1.5a.5.5 0 0 0 0-1H11v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
