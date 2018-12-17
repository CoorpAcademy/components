import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.003 10.75h1.75v1.749h-1.75zM12.001 10.752h-.875v1.749h.875a.874.874 0 1 0 0-1.749z" />
      <Path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.502 15.998H6.753v-1.75h-1.75v1.75H3.254V9.875c0-.484.391-.875.874-.875h3.499c.484 0 .875.391.875.875v6.123zm3.499-1.748h-.875V16H9.377V9.002h2.624a2.627 2.627 0 0 1 2.624 2.625 2.627 2.627 0 0 1-2.624 2.623zM20.748 16h-2.136l-1.363-1.941V16H15.5V9.002h1.749v1.941l1.363-1.941h2.136l-2.456 3.499L20.748 16z" />
    </G>
  </Svg>
);

export default SvgComponent;
