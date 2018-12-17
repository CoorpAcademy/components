import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15c2.757 0 5-2.243 5-5V3c0-1.104-.897-2-2-2H9c-1.103 0-2 .896-2 2v7c0 2.757 2.243 5 5 5zM9 3h6v5H9V3zm6 7c0 1.654-1.346 3-3 3s-3-1.346-3-3h6zM12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm-3 2.471V22H6c0-1.606 1.149-2.881 3-3.529zM11 22v-3.949c.323-.031.655-.051 1-.051 3.533 0 6 1.645 6 4h-7z" />
      <Circle cx={13} cy={20} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
