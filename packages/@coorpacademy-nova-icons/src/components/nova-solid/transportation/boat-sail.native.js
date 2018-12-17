import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M19.65 18L22 13H2l2.33 5zM15 1L6 11h9zM22 20h-2c0 1.104-.897 2-2 2s-2-.896-2-2h-2c0 1.104-.897 2-2 2s-2-.896-2-2H8c0 1.104-.897 2-2 2s-2-.896-2-2H2c0 1.104-.897 2-2 2v2c1.2 0 2.266-.544 3-1.383C3.734 23.456 4.8 24 6 24s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383v-2c-1.103 0-2-.896-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
