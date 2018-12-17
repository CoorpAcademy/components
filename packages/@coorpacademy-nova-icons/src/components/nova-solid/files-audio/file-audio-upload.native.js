import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 12.087V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h10.681A6.96 6.96 0 0 1 12 19.008c0-3.526 2.609-6.434 6-6.921zM12 1.004l5 5h-5v-5zm.632 10.262L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.614l5.265 1.755-.633 1.897zM19 14.593L14.293 19.3l1.414 1.414L18 18.421v5.587h2v-5.587l2.293 2.293 1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
