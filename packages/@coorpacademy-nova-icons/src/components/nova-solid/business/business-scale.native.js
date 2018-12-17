import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 3c0-1.654-1.346-3-3-3S3 1.347 3 3c0 1.654 1.346 3 3 3s3-1.345 3-3zM3 16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.999h1a1 1 0 0 0 1-1V11c0-2.756-2.243-5-5-5s-5 2.244-5 5v2.001a1 1 0 0 0 1 1h1V16zM3 20h8l-1.8 2.4A1 1 0 0 0 10 24h6a1 1 0 0 0 .8-1.6L15 20h8v-2H3v2zm9 2l1-1.333L14 22h-2zM19.5 7.001H23v-2h-2v-1h-2v1.051c-1.14.232-2 1.243-2 2.449 0 1.379 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H17v2h2v1h2V12.95c1.14-.232 2-1.242 2-2.449A2.504 2.504 0 0 0 20.5 8h-1a.5.5 0 0 1-.5-.5c0-.274.225-.499.5-.499z" />
    </G>
  </Svg>
);

export default SvgComponent;
