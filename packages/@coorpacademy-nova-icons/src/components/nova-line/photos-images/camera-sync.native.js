import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 11.505v2.244c.65.423 1 .864 1 1.249 0 .983-2.264 2.321-6 2.81v2.007c4.261-.527 8-2.179 8-4.817 0-1.488-1.197-2.658-3-3.493zM10 15.998v1.918c-4.33-.362-7-1.85-7-2.918 0-.385.35-.826 1-1.249v-2.244c-1.803.835-3 2.005-3 3.493 0 2.843 4.341 4.54 9 4.919v2.081l3-3-3-3z" />
      <Path d="M8 13.998h8c1.103 0 2-.896 2-2v-6c0-1.103-.897-2-2-2h-1.382l-1-2h-3.236l-1 2H8c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h2.618l1-2h.764l1 2H16l.001 6H8v-6z" />
      <Circle cx={12} cy={8.998} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
