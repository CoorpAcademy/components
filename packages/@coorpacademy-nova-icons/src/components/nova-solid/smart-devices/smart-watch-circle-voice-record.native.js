import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 11.001a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2z" />
      <Path d="M15.75 11.001h-1.5c0 1.24-1.009 2.25-2.25 2.25s-2.25-1.01-2.25-2.25h-1.5c0 1.719 1.169 3.156 2.75 3.598v1.402h2v-1.402c1.581-.442 2.75-1.879 2.75-3.598z" />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
