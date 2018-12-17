import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.75 9H9v7h1.75c1.93 0 3.5-1.569 3.5-3.5S12.68 9 10.75 9zm0 5.25v-3.5c.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75zM15 10.75V16h1.75v-2.625h2.625v-1.75H16.75v-.875h3.5V9h-3.5c-.965 0-1.75.785-1.75 1.75zM5.625 9H3v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 5.625 9zm0 3.5H4.75v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875z" />
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
