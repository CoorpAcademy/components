import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18H2V8h15.999v1H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h8v-2z" />
      <Path d="M12 11v7c0 3.813 3.796 5.579 5.804 5.98l.196.039.196-.039C20.204 23.579 24 21.812 24 18v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.175 21.756 14 20.748 14 18v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
