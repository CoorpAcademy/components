import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.102.897 2 2 2h20c1.103 0 2-.898 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M14.625 10.752v5.25h1.75v-2.625H19v-1.75h-2.625v-.875h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75zM6.75 9.002a2.628 2.628 0 0 0-2.625 2.625v1.75c0 1.448 1.178 2.625 2.625 2.625s2.625-1.177 2.625-2.625v-1.75A2.628 2.628 0 0 0 6.75 9.002zm.875 4.374a.876.876 0 0 1-1.75 0v-1.75a.876.876 0 0 1 1.75 0v1.75zM9.375 9.002v1.75h1.75v5.25h1.75v-5.25h1.75v-1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
