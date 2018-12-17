import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M15.5 11.627v1.75a2.629 2.629 0 0 0 2.625 2.625h2.625v-1.75h-2.625a.876.876 0 0 1-.875-.875v-1.75c0-.482.393-.875.875-.875h2.625v-1.75h-2.625a2.629 2.629 0 0 0-2.625 2.625zM13.75 9.002h-3.5a.875.875 0 0 0-.875.875v6.125h1.75v-1.75h1.75v1.75h1.75V9.877a.875.875 0 0 0-.875-.875zm-.875 3.5h-1.75v-1.75h1.75v1.75zM7.625 9.002h-3.5a.875.875 0 0 0-.875.875v6.125H5v-1.75h1.75v1.75H8.5V9.877a.875.875 0 0 0-.875-.875zm-.875 3.5H5v-1.75h1.75v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
