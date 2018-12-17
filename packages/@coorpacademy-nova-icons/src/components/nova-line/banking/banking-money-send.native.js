import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 7c0-1.654-1.346-3-3-3S2 5.345 2 7s1.346 3 3 3 3-1.346 3-3zM5 8c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zM5 10c-2.757 0-5 2.244-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5zm3 7H7a1 1 0 0 0-1 1v4H4v-4a1 1 0 0 0-1-1H2v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2zM19 0c-2.757 0-5 2.244-5 5 0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM12 14h2.586l-3.293 3.292 1.414 1.415L16 15.414V18h2v-6h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
