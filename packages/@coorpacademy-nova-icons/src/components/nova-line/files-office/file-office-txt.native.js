import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM3 18h2v-6h2v-2H1v2h2zM16 10v2h2v6h2v-6h2v-2zM12.8 10l-1.234 2.056L10.333 10H8l2.4 4L8 18h2.333l1.233-2.056L12.8 18h2.333l-2.401-4 2.401-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
