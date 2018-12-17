import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.25 10.75H17V16h1.75v-5.25h1.75V9h-5.25zM5.625 9H3v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 5.625 9zm0 3.5H4.75v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875zM11.625 9H9v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 11.625 9zm0 3.5h-.875v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875z" />
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
