import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v5h2V3h10v4h4v1h2V5.586L16.414 1zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM10 16v2h4v-2h-1v-4h1v-2h-4v2h1v4zM18 10h-3v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-1v-2h1a1.001 1.001 0 0 1 0 2zM3.168 16.445A.998.998 0 0 0 4 18h5v-2H5.869l2.963-4.445A.998.998 0 0 0 8 10H3v2h3.131l-2.963 4.445z" />
    </G>
  </Svg>
);

export default SvgComponent;
