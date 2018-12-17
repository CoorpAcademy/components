import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18H2v-2h8v-2H2V6h8v3h2V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8v-2zM2 2h8v2H2V2zM12 10.98v7c0 3.813 3.796 5.578 5.804 5.98L18 24l.196-.039C20.204 23.559 24 21.793 24 17.98v-7H12zm10 7c0 2.762-3.154 3.756-3.998 3.973C17.175 21.736 14 20.729 14 17.98v-5h8v5z" />
      <Path d="M17 19.98h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
