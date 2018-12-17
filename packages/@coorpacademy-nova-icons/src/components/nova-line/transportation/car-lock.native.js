import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M2.618 16l2-4H11v-2H3.382L0 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-6H2.618zM13 20H7v-2h6v2zM2 18h3v2H2v-2zm13 2v-2h3v2h-3z" />
      <Path d="M22 5V4c0-2.205-1.794-4-4-4s-4 1.795-4 4v1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-6-1c0-1.104.897-2 2-2s2 .896 2 2v1h-4V4zm5 8h-6V7h6v5z" />
      <Circle cx={18} cy={9} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
