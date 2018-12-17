import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={21.936} cy={19} r={1} />
      <Circle cx={21.936} cy={15} r={1} />
      <Circle cx={21.936} cy={23} r={1} />
      <Path d="M11.068 12.732l3.953-4.75-4.106-4.105-.882-2.059A2.997 2.997 0 0 0 7.844.055a2.992 2.992 0 0 0-2.689.824l-.74.74C2.52 3.514 2.188 6.358 3.36 8.617L1.699 10a2 2 0 0 0-.112 2.932l4.576 4.578a2.002 2.002 0 0 0 2.406.322l8.574-4.9 1.792 1.793.001-5-1.793 1.793-6.075 1.214zM6.569 2.293a1 1 0 0 1 1.625.314l.628 1.466-3.888 3.235c-.98-2.534.635-4.015 1.635-5.015z" />
    </G>
  </Svg>
);

export default SvgComponent;
