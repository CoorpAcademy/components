import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.799 10.001c-.93-4.56-4.97-8-9.799-8-1.561 0-3.056.35-4.445 1.039A10.073 10.073 0 0 0 3.04 7.556l1.791.89a8.066 8.066 0 0 1 3.614-3.614A7.913 7.913 0 0 1 12 4.001c3.72 0 6.846 2.555 7.736 6H18l3 3 3-3h-2.201zM12 20.001c-3.72 0-6.846-2.556-7.736-6H6l-3-3-3 3h2.201c.93 4.559 4.97 8 9.799 8a9.945 9.945 0 0 0 8.959-5.556l-1.791-.89A7.955 7.955 0 0 1 12 20.001z" />
      <Path d="M15.535 8.466L15 9.001h-1l-1 1 1 1v2l-1 2h-1l-1-2-1-1v-1l2-1v-1l-1-1v-.9a5.002 5.002 0 0 0 1 9.9 5.001 5.001 0 0 0 3.535-8.535z" />
    </G>
  </Svg>
);

export default SvgComponent;
