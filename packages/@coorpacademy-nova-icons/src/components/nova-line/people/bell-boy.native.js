import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={15} cy={20} r={1} />
      <Path d="M12 15c2.757 0 5-2.243 5-5V4c0-1.104-.897-2-2-2H9c-1.103 0-2 .896-2 2v6c0 2.757 2.243 5 5 5zm3-11v1H9V4h6zM9 7h6v1H9V7zm6 3c0 1.654-1.346 3-3 3s-3-1.346-3-3h6zM12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm-1 2.051V22H6c0-2.125 2.012-3.668 5-3.949zM13 22v-3.949c2.988.281 5 1.824 5 3.949h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
