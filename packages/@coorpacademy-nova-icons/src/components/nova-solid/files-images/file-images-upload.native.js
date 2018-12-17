import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.682A6.971 6.971 0 0 1 12 19.001V19H3l3-4 2 2 4-5 1.276 2.979A6.985 6.985 0 0 1 18 12.082V4.586zM5.5 13A2.498 2.498 0 0 1 3 10.5a2.499 2.499 0 1 1 5 0A2.5 2.5 0 0 1 5.5 13zM12 6V1l5 5h-5zM19 14.586l-4.707 4.707 1.414 1.413L18 18.414v5.587h2v-5.587l2.293 2.292 1.414-1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
