import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.003h10v4h4v1h2V5.589l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM10 10.003v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3zm4 3c0 .552-.449 1-1 1h-1v-2h1c.551 0 1 .448 1 1zM5 14.306l.168.252c.371.557 1.293.557 1.664 0L7 14.306v3.697h2v-7a1.002 1.002 0 0 0-1.832-.555L6 12.2l-1.168-1.752A1 1 0 0 0 3 11.003v7h2v-3.697zM21 10.003h-4v2h3v1h-3v2h3v1h-3v2h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
