import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M3.847 13h16.306a1 1 0 0 0 .986-.836l.667-4A1 1 0 0 0 20.819 7H8V1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6l.861 5.164a1 1 0 0 0 .986.836zM4 2h2v2H4V2z" />
      <Path d="M11 4h4v2h-4zM14 1h4v2h-4zM17 4h4v2h-4zM22 20h-2c0 1.104-.897 2-2 2s-2-.896-2-2h-2c0 1.104-.897 2-2 2s-2-.896-2-2H8c0 1.104-.897 2-2 2s-2-.896-2-2H2c0 1.104-.897 2-2 2v2c1.2 0 2.266-.544 3-1.383C3.734 23.456 4.8 24 6 24s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383v-2c-1.103 0-2-.896-2-2zM22 15h-2c0 1.104-.897 2-2 2s-2-.896-2-2h-2c0 1.104-.897 2-2 2s-2-.896-2-2H8c0 1.104-.897 2-2 2s-2-.896-2-2H2c0 1.104-.897 2-2 2v2c1.2 0 2.266-.544 3-1.383C3.734 18.456 4.8 19 6 19s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383v-2c-1.103 0-2-.896-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
