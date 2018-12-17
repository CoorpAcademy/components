import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11.286 11.44L8.759 18l2.981-1.549 3.636-6.642L19.91 7.81a1.672 1.672 0 0 0 .856-2.222 1.678 1.678 0 0 0-2.152-.868l-4.655 2.072-5.511-3.49L5.78 4.684c.265.172 5.053 3.36 5.369 3.36L7.115 9.84 3.628 8.281 1 9.796l6.637 3.328 3.649-1.684zM2 21h10v2H2zM21.293 15.293L17 19.586l-2.293-2.293-1.414 1.413L17 22.414l5.707-5.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
