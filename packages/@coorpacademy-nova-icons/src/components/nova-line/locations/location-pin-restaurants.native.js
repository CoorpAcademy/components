import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M15.5 11H17V9a3 3 0 0 0-3-3v8h1.5v-3z" />
      <Path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
      <Path d="M9.5 10.654V14H11v-3.346A3.244 3.244 0 0 0 13.5 7.5V6H12v1.5c0 .697-.41 1.294-1 1.575V6H9.5v3.075c-.59-.281-1-.878-1-1.575V6H7v1.5a3.244 3.244 0 0 0 2.5 3.154z" />
    </G>
  </Svg>
);

export default SvgComponent;
