import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M8.938 9H6.313v7h1.75v-1.75h.875a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 8.938 9zm0 3.5h-.875v-1.75h.875a.876.876 0 0 1 0 1.75zM15.063 11.188L14.188 9h-1.75l1.75 4.375h.012V16h1.75v-2.657L17.688 9h-1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
