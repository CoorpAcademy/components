import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 7.999h5v-2h-3V4h-2v2c-1.654 0-3 1.347-3 3v1c0 1.654 1.346 3 3 3h2c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1h-5v2h3v2h2v-2c1.654 0 3-1.346 3-3v-1c0-1.653-1.346-3-3-3h-2c-.551 0-1-.449-1-1V9c0-.551.449-1.001 1-1.001zM2.841 7.999H6v-3.98a10.033 10.033 0 0 0-3.159 3.98zM6 19.98V16H2.841A10.026 10.026 0 0 0 6 19.98zM2 12c0 .686.07 1.353.201 2H6v-4H2.201A10.034 10.034 0 0 0 2 12zM8 7.999h4V2a9.95 9.95 0 0 0-4 .84v5.159zM8 10h4v4H8zM8 21.159A9.95 9.95 0 0 0 12 22v-6H8v5.159z" />
    </G>
  </Svg>
);

export default SvgComponent;
