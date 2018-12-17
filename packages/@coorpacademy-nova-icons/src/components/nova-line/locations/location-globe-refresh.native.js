import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M2 10c0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931h2c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10v-2c-4.411 0-8-3.589-8-8zm10-2v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3zM18 22c-1.077 0-2.064-.44-2.811-1.189L17 19h-5v5l1.763-1.763A6.032 6.032 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.239 13.761A5.936 5.936 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.189L19 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
