import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 20.001h4.263a7.992 7.992 0 0 1-.263-2 8 8 0 0 1 8-8v-9a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <Path d="M18 12.001l1.715 4.286H24l-3.707 3.13 1.992 4.584L18 21.167l-4.285 2.834 1.994-4.584L12 16.287h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
