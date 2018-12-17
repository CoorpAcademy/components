import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 17V9l7.137 3.57a7.97 7.97 0 0 1 5.862-2.569V4.585L13.413 0H2C.897 0 0 .897 0 2v18c0 1.102.897 2 2 2h9.077a7.952 7.952 0 0 1 .035-8.054L5 17zm7-16l5 5h-5V1z" />
      <Path d="M18 22.002c-1.077 0-2.064-.442-2.811-1.19L17 19.002h-5v5l1.764-1.764A6.028 6.028 0 0 0 18 24.002c3.309 0 6-2.692 6-6h-2c0 2.204-1.794 4-4 4zM22.239 13.763A5.933 5.933 0 0 0 18 12.002c-3.309 0-6 2.691-6 6h2c0-2.207 1.794-4 4-4 1.078 0 2.065.44 2.812 1.188L19 17.002h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
