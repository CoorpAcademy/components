import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 8.841v2.15c.155.306.25.644.25 1.01 0 1.24-1.009 2.25-2.25 2.25s-2.25-1.01-2.25-2.25c0-.365.095-.704.25-1.01v-2.15a3.74 3.74 0 0 0-1.75 3.16c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75A3.74 3.74 0 0 0 14 8.841z" />
      <Path d="M11 7.001h2v4h-2z" />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
