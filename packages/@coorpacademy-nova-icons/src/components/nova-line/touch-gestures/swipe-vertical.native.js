import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 5.414V7h2V5.414l1.293 1.293 1.414-1.414L16 1.586l-3.707 3.707 1.414 1.414zM17 19.586V18h-2v1.586l-1.293-1.293-1.414 1.414L16 23.414l3.707-3.707-1.414-1.414zM18 12.5c0-2.481-2.019-4.5-4.5-4.5H2v9h11.5c2.481 0 4.5-2.018 4.5-4.5zM4 10h9.5c1.378 0 2.5 1.122 2.5 2.5 0 1.379-1.122 2.5-2.5 2.5H4v-5z" />
      <Path d="M15 12.5c0-.827-.673-1.5-1.5-1.5H12v3h1.5c.827 0 1.5-.673 1.5-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
