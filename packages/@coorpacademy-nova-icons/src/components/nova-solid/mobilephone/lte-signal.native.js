import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.696 9.766l1.427 1.427C9.869 10.442 10.857 10 11.937 10c1.078 0 2.064.44 2.81 1.188l1.428-1.429A5.94 5.94 0 0 0 11.938 8a6.028 6.028 0 0 0-4.242 1.766z" />
      <Path d="M11.938 5.999c2.134 0 4.154.852 5.649 2.347L19 6.934a9.978 9.978 0 0 0-7.062-2.935 9.973 9.973 0 0 0-7.067 2.939l1.413 1.414a7.972 7.972 0 0 1 5.654-2.353zM9 14.999h2v6h2v-6h2v-2H9zM5 12.999H3v8h5v-2H5zM22 14.999v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
