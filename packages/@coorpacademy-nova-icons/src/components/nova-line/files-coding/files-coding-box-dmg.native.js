import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.897 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M5 9H3.25v7H5c1.93 0 3.5-1.57 3.5-3.5S6.93 9 5 9zm0 5.25v-3.5c.965 0 1.75.785 1.75 1.75S5.965 14.25 5 14.25zM15.5 10.75v3.5c0 .965.785 1.75 1.75 1.75H19c.965 0 1.75-.785 1.75-1.75v-2.625h-2.625v1.75H19v.875h-1.75v-3.5h3.5V9h-3.5c-.965 0-1.75.785-1.75 1.75zM14.003 9.038a.875.875 0 0 0-.981.352L12 10.923 10.978 9.39a.875.875 0 0 0-1.603.485V16h1.75v-3.235l.147.221c.325.487 1.131.487 1.456 0l.147-.221V16h1.75V9.875a.875.875 0 0 0-.622-.837z" />
    </G>
  </Svg>
);

export default SvgComponent;
