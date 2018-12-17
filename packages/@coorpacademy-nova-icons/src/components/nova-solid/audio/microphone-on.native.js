import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 8.668a2 2 0 0 0 2-2V4.003a2 2 0 0 0-4 0v2.666a2 2 0 0 0 2 1.999z" />
      <Path d="M13 13.003v-1.101a5.009 5.009 0 0 0 4-4.899h-2c0 1.654-1.346 3-3 3s-3-1.346-3-3H7a5.009 5.009 0 0 0 4 4.899v1.101h2zM17 14.003V17.7l-2.168-3.251a.997.997 0 0 0-1.122-.402.998.998 0 0 0-.71.956v7h2v-3.697l2.168 3.252A1 1 0 0 0 19 21.003v-7h-2zM8 14.003c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3s3-1.346 3-3v-2c0-1.654-1.346-3-3-3zm1 5c0 .551-.449 1-1 1s-1-.449-1-1v-2c0-.551.449-1 1-1s1 .449 1 1v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
