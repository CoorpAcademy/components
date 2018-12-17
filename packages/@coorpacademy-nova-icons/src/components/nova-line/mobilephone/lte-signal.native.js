import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.938 7.999a6.031 6.031 0 0 0-4.241 1.767l1.427 1.427C9.87 10.442 10.858 10 11.938 10c1.078 0 2.063.439 2.81 1.188l1.428-1.429a5.94 5.94 0 0 0-4.238-1.76z" />
      <Path d="M11.938 3.999a9.973 9.973 0 0 0-7.067 2.939l1.413 1.414a7.976 7.976 0 0 1 5.654-2.354c2.134 0 4.154.852 5.649 2.347L19 6.934a9.974 9.974 0 0 0-7.062-2.935zM15 12.999H9v2h2v6h2v-6h2zM5 18.999v-6H3v8h5v-2zM22 14.999v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
