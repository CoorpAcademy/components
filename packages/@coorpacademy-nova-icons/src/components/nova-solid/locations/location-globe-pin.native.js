import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19 9a6 6 0 0 1 .954.083A10 10 0 0 0 14 .838V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.459C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10a9.934 9.934 0 0 0 4.173-.921C13.486 17.581 13 16.13 13 15a6 6 0 0 1 6-6z" />
      <Path d="M19 11c-2.206 0-4 1.794-4 4 0 2.979 2.289 6.384 4 8.667 1.711-2.283 4-5.682 4-8.667 0-2.206-1.794-4-4-4zm0 9.214c-.892-1.434-2-3.594-2-5.214 0-1.102.897-2 2-2s2 .898 2 2c0 1.615-1.109 3.778-2 5.214z" />
    </G>
  </Svg>
);

export default SvgComponent;
