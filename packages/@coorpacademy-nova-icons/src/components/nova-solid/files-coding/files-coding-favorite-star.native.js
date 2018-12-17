import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 11.001V4.586L13.414 0H2C.897 0 0 .896 0 2v18c0 1.104.897 2 2 2h10.259A6.956 6.956 0 0 1 11 18.001c0-3.82 3.102-7 7-7zM12 1l5 5h-5V1zm0 7.003h2v4h-2v-4zm-9 0h2v4H3v-4zM6 18H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4z" />
      <Path d="M24 16.287h-4.286L18 12.001l-1.715 4.286H12l3.708 3.13-1.994 4.584L18 21.167l4.285 2.834-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
