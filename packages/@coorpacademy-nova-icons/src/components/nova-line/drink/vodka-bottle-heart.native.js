import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 8.352V6.999a1 1 0 0 0 1-1V2.998A.997.997 0 0 0 15 2H9c-.553 0-1 .445-1 .998v3.001a1 1 0 0 0 1 1v1.353C7.933 8.904 6 10.281 6 13v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8c0-2.719-1.933-4.096-3-4.648zm-5-4.354h4V5h-4V3.998zM16 20H8v-7c0-2.224 2.227-3.021 2.316-3.051A1 1 0 0 0 11 9V6.999h2V9c0 .427.275.808.678.947C13.773 9.979 16 10.776 16 13v7z" />
      <Path d="M13 12c-1 0-1 1-1 1s0-1-1-1-2 1-2 2c0 2 3 4 3 4s3-2 3-4c0-1-1-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
