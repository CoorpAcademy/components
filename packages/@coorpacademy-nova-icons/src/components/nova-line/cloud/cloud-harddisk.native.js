import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 10h5c2.757 0 5-2.243 5-5s-2.243-5-5-5a5.006 5.006 0 0 0-4.072 2.113A3.877 3.877 0 0 0 9 2C6.795 2 5 3.795 5 6s1.795 4 4 4zm0-6c.305 0 .611.078.909.232a.997.997 0 0 0 1.368-.473A3.006 3.006 0 0 1 14 2c1.654 0 3 1.346 3 3s-1.346 3-3 3H9a2 2 0 0 1 0-4zM19 12H5a2 2 0 0 0-2 2v8c0 1.103.896 2 2 2h14c1.104 0 2-.897 2-2v-8a2 2 0 0 0-2-2zm0 2l-.001 3H5v-3h14zM5 22v-3h13.998l-.001 3H5z" />
      <Circle cx={13.5} cy={20.5} r={1} />
      <Circle cx={16.5} cy={20.5} r={1} />
      <Circle cx={13.5} cy={15.5} r={1} />
      <Circle cx={16.5} cy={15.5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
