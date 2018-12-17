import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.897 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M7.625 9h-3.5a.875.875 0 0 0-.875.875V16H5v-1.75h1.75V16H8.5V9.875A.875.875 0 0 0 7.625 9zm-.875 3.5H5v-1.75h1.75v1.75zM12 9H9.375v7h1.75v-1.75H12a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 12 9zm0 3.5h-.875v-1.75H12c.482 0 .875.393.875.875s-.393.875-.875.875zM18.125 9H15.5v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 18.125 9zm0 3.5h-.875v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875z" />
    </G>
  </Svg>
);

export default SvgComponent;
