import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2zm-2 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306zM20 .002c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2h-1v3h2V7.876a4.006 4.006 0 0 0 3-3.874c0-2.205-1.794-4-4-4z" />
      <Circle cx={20} cy={11.002} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
