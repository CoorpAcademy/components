import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.897 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M17.25 9a2.629 2.629 0 0 0-2.625 2.625v1.75c0 1.448 1.178 2.625 2.625 2.625s2.625-1.177 2.625-2.625v-1.75A2.629 2.629 0 0 0 17.25 9zm.875 4.375a.876.876 0 0 1-1.75 0v-1.75c0-.482.393-.875.875-.875s.875.393.875.875v1.75zM8.5 11.188a2.19 2.19 0 0 0 2.188 2.188h.875a.439.439 0 0 1 0 .876H8.5V16h3.063c1.206 0 2.188-.981 2.188-2.188s-.981-2.188-2.188-2.188h-.875a.439.439 0 0 1 0-.876h3.063V9h-3.063A2.19 2.19 0 0 0 8.5 11.188zM4.125 10.75H5v3.5h-.875V16h3.5v-1.75H6.75v-3.5h.875V9h-3.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
