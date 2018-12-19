import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M23 4H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM12 14c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2zM2 10h2v4H2v-4zm0 6h4V8H2V6h9v2.143C9.28 8.59 8 10.142 8 12s1.28 3.411 3 3.858V18H2v-2zm20-2h-2v-4h2v4zm-4-6v8h4v2h-9v-2.142c1.72-.448 3-2 3-3.858s-1.28-3.41-3-3.857V6h9v2h-4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
