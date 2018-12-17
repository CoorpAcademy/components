import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h12.349a5.97 5.97 0 0 1-.349-2c0-.342.035-.674.09-1.001H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293 1.414 1.413-3 3a.999.999 0 0 1-1.414 0L8 13.414l-3 3V17h9.81A6.007 6.007 0 0 1 18 14.35V4.586zM12 6V1l5 5h-5zM21 19.001v-3h-2v3h-3v2.001h3v3h2v-3h3v-2.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
