import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.486 5.126l-9-5a1 1 0 0 0-.972 0l-9 5A1.001 1.001 0 0 0 2 6c0 .694.114 17 10 17S22 6.694 22 6c0-.363-.197-.697-.514-.874zM8 16a3.004 3.004 0 0 1-3-2.999V10.5C5 8.019 6.794 6 9 6h1v2H9c-1.014 0-1.845.951-1.974 2.177C7.333 10.07 7.657 10 8 10c1.654 0 3 1.346 3 3s-1.346 3-3 3zm8 0c-1.654 0-3-1.346-3-2.999V10.5C13 8.019 14.794 6 17 6h1v2h-1c-1.014 0-1.845.951-1.974 2.177.307-.107.631-.177.974-.177 1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
      <Circle cx={16} cy={13} r={1} />
      <Circle cx={8} cy={13} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
