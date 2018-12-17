import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={20} cy={21} r={1} />
      <Circle cx={4} cy={21} r={1} />
      <Path d="M2 10v4c0 1.103.897 2 2 2h7v4H6v2h12v-2h-5v-4h7c1.104 0 2-.897 2-2v-4H2zm8 4H5v-2h5v2zm5 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM22 8V4c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4h5v2H5V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
