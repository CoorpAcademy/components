import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M9.802 13.04l1.854 6.391a46.329 46.329 0 0 1 1.954-.443l-1.884-6.497a7.41 7.41 0 0 1 3.518-2.242 7.47 7.47 0 0 1 5.333.449C19.089 5.721 14.061 2.761 9.05 3.762l-.301-1.04a1 1 0 1 0-1.921.556l.309 1.066C2.533 6.268-.004 11.36 1.375 16.269a7.46 7.46 0 0 1 8.427-3.229zM4 24h19v-5c-11 0-19 4-19 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
