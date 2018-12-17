import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 19l3-4 2 2 4-5 .21.49a7.97 7.97 0 0 1 5.789-2.489V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h9.078a7.958 7.958 0 0 1-1.01-3H3zm9-18l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8z" />
      <Path d="M18 22.001c-1.077 0-2.064-.441-2.811-1.189L17 19.001h-5v5l1.764-1.764A6.032 6.032 0 0 0 18 24.001c3.309 0 6-2.691 6-6h-2c0 2.205-1.794 4-4 4zM22.239 13.762A5.937 5.937 0 0 0 18 12.001c-3.309 0-6 2.692-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.441 2.812 1.189L19 17.001h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
