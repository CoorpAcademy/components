import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M6.279 9.98l2.211 6.633 2.095-1.571-.918-1.225L7.721 7.98H6V3.063A7.933 7.933 0 0 1 9 2.05v5.93h3v1h2v-3h-3V2.05a7.977 7.977 0 0 1 6.951 7.041l1.988-.22A9.983 9.983 0 0 0 10-.02c-5.514 0-10 4.486-10 10s4.486 10 10 10v-2c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V9.98h2.279z" />
      <Path d="M12 10.98v7c0 3.813 3.796 5.579 5.804 5.98L18 24l.196-.039C20.204 23.56 24 21.793 24 17.98v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.175 21.737 14 20.729 14 17.98v-5h8v5z" />
      <Path d="M17 19.98h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
