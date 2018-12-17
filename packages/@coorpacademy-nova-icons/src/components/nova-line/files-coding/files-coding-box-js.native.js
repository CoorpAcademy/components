import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M9.375 13.375a.876.876 0 0 1-1.75 0h-1.75C5.875 14.823 7.053 16 8.5 16s2.625-1.177 2.625-2.625V9h-1.75v4.375zM12.875 11.188a2.19 2.19 0 0 0 2.188 2.188h.875a.439.439 0 0 1 0 .876h-3.063V16h3.063c1.206 0 2.188-.981 2.188-2.188s-.981-2.188-2.188-2.188h-.875a.439.439 0 0 1 0-.876h3.063V9h-3.063a2.19 2.19 0 0 0-2.188 2.188z" />
    </G>
  </Svg>
);

export default SvgComponent;
