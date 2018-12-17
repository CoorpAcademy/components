import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12.002} r={5} />
      <Path d="M11 2.002h2v3h-2zM18.365 4.223l1.414 1.414-2.122 2.122-1.414-1.414zM19 11.002h3v2h-3zM18.364 19.78l-2.122-2.121 1.414-1.415 2.122 2.122zM11 19.002h2v3h-2zM5.635 19.78L4.22 18.367l2.122-2.122 1.414 1.415zM2 11.002h3v2H2zM5.635 4.224l2.122 2.122L6.343 7.76 4.221 5.638z" />
    </G>
  </Svg>
);

export default SvgComponent;
