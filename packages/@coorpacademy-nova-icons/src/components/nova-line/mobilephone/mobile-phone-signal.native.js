import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.588 9.592l1.41 1.41 1.408-1.41a1.955 1.955 0 0 0-1.408-.59c-.551 0-1.051.221-1.41.59zM9.761 6.767l1.428 1.427C11.934 7.442 12.922 7 14.002 7c1.078 0 2.064.439 2.81 1.188l1.429-1.429A5.945 5.945 0 0 0 14.002 5a6.031 6.031 0 0 0-4.241 1.767z" />
      <Path d="M14.002 1a9.973 9.973 0 0 0-7.066 2.939l1.412 1.414C9.845 3.854 11.867 3 14.002 3s4.154.852 5.65 2.347l1.413-1.412A9.974 9.974 0 0 0 14.002 1zM12 18H4v-8h5V8H4V6h2V4H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V12h-2v6zm-8 4v-2h8v2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
