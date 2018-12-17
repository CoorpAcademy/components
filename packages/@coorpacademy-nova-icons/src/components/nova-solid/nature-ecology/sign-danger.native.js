import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={14} cy={12} r={1} />
      <Circle cx={10} cy={12} r={1} />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10S17.522 2 12 2zM6.707 5.293l2 2-1.414 1.414-2-2 1.414-1.414zm0 13.413l-1.414-1.413 2-2 1.414 1.413-2 2zM14 15.445V17h-4v-1.555C8.81 14.752 8 13.477 8 12a4 4 0 0 1 8 0c0 1.477-.81 2.752-2 3.445zm3.293 3.261l-2-2 1.414-1.413 2 2-1.414 1.413zm-.586-9.999l-1.414-1.413 2-2 1.414 1.413-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
