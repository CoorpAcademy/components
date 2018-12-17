import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M3.25 11.625v1.75A2.628 2.628 0 0 0 5.875 16H8.5v-1.75H5.875A.876.876 0 0 1 5 13.375v-1.75c0-.482.393-.875.875-.875H8.5V9H5.875a2.629 2.629 0 0 0-2.625 2.625zM9.375 11.188a2.19 2.19 0 0 0 2.188 2.188h.875a.439.439 0 0 1 0 .876H9.375V16h3.063c1.206 0 2.188-.981 2.188-2.188s-.981-2.188-2.188-2.188h-.875a.439.439 0 0 1 0-.876h3.063V9h-3.063a2.19 2.19 0 0 0-2.188 2.188zM18.95 9l-.838 3.413L17.25 9H15.5l1.718 7h1.8L19 15.929 20.75 9z" />
    </G>
  </Svg>
);

export default SvgComponent;
