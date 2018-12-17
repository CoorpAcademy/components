import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M21 11c-1.654 0-3 1.346-3 3v5c0 .551-.449 1-1 1s-1-.449-1-1v-9c0-.889-.396-1.68-1.012-2.229.002.077.012.152.012.229a6.96 6.96 0 0 1-1 3.593V19c0 1.654 1.346 3 3 3s3-1.346 3-3v-5c0-.551.449-1 1-1h1v-2h-1zM8 2C4.691 2 2 4.691 2 8s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10v-2c1.104 0 2-.898 2-2h2c0 2.205-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
