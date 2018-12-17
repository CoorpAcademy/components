import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 16.898a5.008 5.008 0 0 0 4-4.899c0-.086-.996-9.024-1.006-9.11A1 1 0 0 0 15 2H9a1 1 0 0 0-.994.89C7.996 2.976 7 11.913 7 12a5.008 5.008 0 0 0 4 4.899V20H8v2h8v-2h-3v-3.102zM14.105 4l.222 2H9.673l.222-2h4.21zM9 12.051L9.451 8h5.098L15 12.051C14.973 13.682 13.637 15 12 15s-2.973-1.318-3-2.949z" />
      <Circle cx={13} cy={10} r={1} />
      <Circle cx={11} cy={12} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
