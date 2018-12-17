import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v5h2v-5h10v4h4v1h2V5.587l-4.586-4.585zM19 21.002H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM15 12.002v6h2v-3h3v-2h-3v-1h4v-2h-4c-1.103 0-2 .896-2 2zM6 18.002c1.654 0 3-1.346 3-3v-2c0-1.655-1.346-3-3-3s-3 1.345-3 3v2c0 1.654 1.346 3 3 3zm-1-5c0-.551.449-1 1-1s1 .449 1 1v2c0 .551-.449 1-1 1s-1-.449-1-1v-2zM9 10.002v2h2v6h2v-6h2v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
