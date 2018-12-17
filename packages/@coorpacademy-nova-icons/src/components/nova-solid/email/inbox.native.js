import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142zM15.293 8.293L13 10.586V2h-2v8.586L8.707 8.293 7.293 9.707 12 14.414l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
