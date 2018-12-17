import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={10.001} r={2} />
      <Path d="M7 13.001l-3 4h6v-4l-1 2z" />
      <Path d="M2 2h10v4h4v4.002h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M24 18.999v-2h-1.102a4.963 4.963 0 0 0-.733-1.753l.784-.784-1.414-1.414-.785.784a4.937 4.937 0 0 0-1.751-.73v-1.103h-2v1.103a4.94 4.94 0 0 0-1.753.73l-.783-.783-1.414 1.415.783.783a4.957 4.957 0 0 0-.732 1.752h-1.102v2H13.1c.13.638.384 1.229.732 1.754l-.784.784 1.415 1.414.783-.785a4.95 4.95 0 0 0 1.753.732V24h2v-1.102a4.945 4.945 0 0 0 1.753-.733l.784.784 1.413-1.415-.784-.783a4.955 4.955 0 0 0 .731-1.752H24zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
