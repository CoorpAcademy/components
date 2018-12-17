import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20.999 9.998h-3l-2-4h-2l-2 4h-2l1-4h-4l1 4h-5a1 1 0 0 0-1 1v9c0 1.655 1.346 3 3 3h14c1.654 0 3-1.345 3-3v-9a1 1 0 0 0-1-1zm-1 2v2a2 2 0 0 1-4 0 1 1 0 1 0-2 0 2 2 0 0 1-4 0 1 1 0 1 0-2 0 2 2 0 0 1-4 0v-2h16zm-1 9h-14c-.551 0-1-.449-1-1v-2.556a3.959 3.959 0 0 0 2 .556 3.99 3.99 0 0 0 3-1.356c.733.832 1.807 1.356 3 1.356s2.267-.524 3-1.356a3.99 3.99 0 0 0 3 1.356c.732 0 1.409-.211 2-.556v2.556c0 .551-.449 1-1 1z" />
      <Circle cx={8.999} cy={2.998} r={2} />
      <Circle cx={14.999} cy={2.998} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
