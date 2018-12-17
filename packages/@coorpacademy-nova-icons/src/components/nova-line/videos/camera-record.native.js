import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.526 12.15a1.003 1.003 0 0 0-.973-.044L14 13.382V12c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v8c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-1.381l2.553 1.275a.992.992 0 0 0 .973-.043c.294-.182.474-.504.474-.851v-6a1 1 0 0 0-.474-.85zM4 20v-8h8l.001 8H4zm12-2.618l-2-1v-.763l2-1v2.763zM18 2c-2.206 0-4 1.795-4 4 0 2.206 1.794 4 4 4s4-1.794 4-4c0-2.205-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2z" />
      <Circle cx={18} cy={6} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
