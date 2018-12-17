import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 8.465V4H8v5.535l3.446 2.297 1.109-1.664z" />
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 .341-.033.673-.08 1h2.021c.037-.329.059-.662.059-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a9.18 9.18 0 0 0 1-.058V15.92c-.327.047-.659.08-1 .08-3.859 0-7-3.14-7-7z" />
      <Path d="M24 19v-2h-1.102a4.968 4.968 0 0 0-.733-1.754l.784-.784-1.414-1.413-.785.784a4.958 4.958 0 0 0-1.751-.731V12h-2v1.102a4.96 4.96 0 0 0-1.753.731l-.783-.783-1.414 1.415.783.783A4.949 4.949 0 0 0 13.1 17h-1.102v2H13.1c.13.638.384 1.229.732 1.754l-.784.784 1.415 1.414.783-.785a4.95 4.95 0 0 0 1.753.732v1.102h2v-1.102a4.945 4.945 0 0 0 1.753-.733l.784.784 1.413-1.414-.784-.783a4.955 4.955 0 0 0 .731-1.752H24zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
