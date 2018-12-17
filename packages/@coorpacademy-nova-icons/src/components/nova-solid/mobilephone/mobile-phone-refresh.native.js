import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18c0-2.025.759-3.869 2-5.279V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8c.087 0 .171-.015.256-.025A7.99 7.99 0 0 1 10 18zm-8-2V4h8v12H2zM18.001 22c-1.077 0-2.064-.44-2.811-1.19L17.001 19h-5v5l1.764-1.764A6.026 6.026 0 0 0 18.001 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4zM22.24 13.761A5.937 5.937 0 0 0 18.001 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.189L19.001 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
