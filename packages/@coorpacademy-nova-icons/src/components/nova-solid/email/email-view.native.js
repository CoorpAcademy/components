import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.414 11l-3.247-3.247C20.691 6.963 21 6.018 21 5c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 12.414 23.414 11zM13 5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM8 16.771l6.555-4.683A1.964 1.964 0 0 0 14 12H2c-.193 0-.378.036-.555.088L8 16.771z" />
      <Path d="M8.581 18.813a.995.995 0 0 1-1.162 0l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.153-.021-.303-.055-.446l-7.364 5.259z" />
    </G>
  </Svg>
);

export default SvgComponent;
