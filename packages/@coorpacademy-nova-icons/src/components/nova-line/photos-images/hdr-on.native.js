import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3.999H2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm-20 14v-12h20l.001 12H2z" />
      <Path d="M11.5 8.999H9.75v7h1.75c1.931 0 3.5-1.569 3.5-3.5s-1.569-3.5-3.5-3.5zm0 5.25v-3.5c.965 0 1.75.786 1.75 1.75 0 .965-.785 1.75-1.75 1.75zM6.5 11.624H4.75V8.999H3v7h1.75v-2.625H6.5v2.625h1.75v-7H6.5zM21 11.624a2.629 2.629 0 0 0-2.625-2.625H15.75v7h1.75v-1.75h.453l1.021 1.75H21l-1.253-2.148A2.617 2.617 0 0 0 21 11.624zm-3.5-.875h.875c.482 0 .875.393.875.875s-.393.875-.875.875H17.5v-1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
