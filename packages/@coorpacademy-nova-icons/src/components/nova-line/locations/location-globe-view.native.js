import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M2 10c0-2.021.759-3.864 2-5.274V10h2.279l1.772 5.316 1.897-.633L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3v1h2V6h-3V2.069c3.94.495 7 3.859 7 7.931h2c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10v-2c-4.411 0-8-3.589-8-8z" />
      <Path d="M23.414 22l-3.247-3.247A4.966 4.966 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833L22 23.414 23.414 22zM13 16c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
