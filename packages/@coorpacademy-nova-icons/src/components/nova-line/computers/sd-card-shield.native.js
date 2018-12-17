import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 11v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.039C20.204 23.579 24 21.813 24 18v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.175 21.757 14 20.748 14 18v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2zM2 2h7.532L14 7.362V9h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M3 4h2v3H3zM6 4h2v3H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
