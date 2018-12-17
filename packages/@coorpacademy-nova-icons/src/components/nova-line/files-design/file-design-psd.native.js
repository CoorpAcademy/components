import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 10.002h-5.5a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h3.5c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15v6h2c2.206 0 4-1.794 4-4s-1.794-4-4-4zm0 6v-4c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2zM5 16.002h1c1.654 0 3-1.346 3-3 0-1.655-1.346-3-3-3H3v8h2v-2zm0-4h1c.551 0 1 .449 1 1 0 .551-.449 1-1 1H5v-2zM16.414 1.002H5c-1.103 0-2 .896-2 2v5h2v-5h10v4h4v1h2V5.587l-4.586-4.585zM19 21.002H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
