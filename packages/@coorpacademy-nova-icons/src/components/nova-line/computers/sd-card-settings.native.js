import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <Path
      d="M10 18H2V2h7.532L14 7.362V9h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2zM24 19v-2h-1.102a4.968 4.968 0 0 0-.733-1.754l.784-.784-1.414-1.414-.785.784a4.937 4.937 0 0 0-1.751-.73V12h-2v1.102a4.96 4.96 0 0 0-1.753.731l-.783-.783-1.414 1.414.783.783A4.961 4.961 0 0 0 13.1 17h-1.102v2H13.1c.13.638.384 1.229.732 1.754l-.784.784 1.415 1.413.783-.784a4.93 4.93 0 0 0 1.753.731v1.103h2v-1.103a4.98 4.98 0 0 0 1.753-.732l.784.783 1.413-1.415-.784-.782A4.955 4.955 0 0 0 22.896 19H24zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
