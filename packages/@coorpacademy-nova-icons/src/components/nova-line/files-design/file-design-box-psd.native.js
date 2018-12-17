import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.102.897 2 2 2h20c1.103 0 2-.898 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M16.375 9.002h-4.813a2.19 2.19 0 0 0-2.188 2.187 2.19 2.19 0 0 0 2.188 2.188h.875a.439.439 0 0 1 0 .876H9.375v1.75h3.063a2.191 2.191 0 0 0 2.188-2.188 2.19 2.19 0 0 0-2.188-2.188h-.875a.438.438 0 1 1 0-.875h3.063v5.25h1.75c1.93 0 3.5-1.569 3.5-3.5a3.506 3.506 0 0 0-3.501-3.5zm0 5.25v-3.5c.965 0 1.75.785 1.75 1.75 0 .964-.785 1.75-1.75 1.75z" />
      <Path d="M6.75 9.002H4.125v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.628 2.628 0 0 0 6.75 9.002zm0 3.5h-.875v-1.75h.875a.876.876 0 0 1 0 1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
