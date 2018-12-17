import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M12.875 11.625h-1.75V9h-1.75v7h1.75v-2.625h1.75V16h1.75V9h-1.75zM5.875 9H3.25v7H5v-1.75h.875A2.628 2.628 0 0 0 8.5 11.625 2.629 2.629 0 0 0 5.875 9zm0 3.5H5v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875zM18.125 9H15.5v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 18.125 9zm0 3.5h-.875v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875z" />
    </G>
  </Svg>
);

export default SvgComponent;
