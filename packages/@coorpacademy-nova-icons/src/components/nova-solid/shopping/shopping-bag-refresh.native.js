import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.288 10.036L17 6H1L0 20h10.262A8.045 8.045 0 0 1 10 18a7.997 7.997 0 0 1 7.288-7.964zM18.001 22c-1.077 0-2.064-.44-2.811-1.19L17.001 19h-5v5l1.764-1.764A6.026 6.026 0 0 0 18.001 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.24 13.761A5.937 5.937 0 0 0 18.001 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.189L19.001 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
