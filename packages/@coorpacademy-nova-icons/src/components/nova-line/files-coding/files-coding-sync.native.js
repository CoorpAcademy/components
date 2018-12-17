import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 8.007h3v4H7zM11 8.007h2v1.999h-2zM8 17.004h2V13.007H8zM4 8.008h2v3.999H4zM4 13.007h3v3.997H4z" />
      <Path d="M2 2.004h10v4h4v4.002h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M18 12.004c-3.309 0-6 2.692-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.069 0-2.074-.416-2.78-1.119l-.047-.054L17 19.004h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 24.004c3.309 0 6-2.69 6-6 0-3.308-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
