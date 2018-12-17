import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.001H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.104 0 2-.897 2-2v-9c0-1.103-.896-2-2-2zm-20 11v-9h20l.002 9H2z" />
      <Path d="M6.75 13.376a.876.876 0 0 1-1.75 0H3.25c0 1.447 1.178 2.625 2.625 2.625S8.5 14.823 8.5 13.376V9.001H6.75v4.375zM12 9.001H9.375v7h1.75v-1.75H12c1.447 0 2.625-1.178 2.625-2.625S13.447 9.001 12 9.001zm0 3.5h-.875v-1.75H12a.876.876 0 0 1 0 1.75zM15.5 10.751v3.5c0 .965.785 1.75 1.75 1.75H19c.966 0 1.75-.785 1.75-1.75v-2.625h-2.625v1.75H19v.875h-1.75v-3.5h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
