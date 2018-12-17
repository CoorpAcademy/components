import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.907 8-12.318s-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
      <Path d="M15.97 7L14 9.47v3.03h-1V8H9v6h6.5v-3.909l1.53-2.03L15.97 7zM12 11h-2V9h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
