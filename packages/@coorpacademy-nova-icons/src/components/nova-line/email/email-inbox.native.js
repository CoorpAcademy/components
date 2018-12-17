import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 11H4c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2v-9c0-1.103-.896-2-2-2zm-1.887 2L12 16.82 5.887 13h12.226zM4 22v-7.821l7.471 4.669a.998.998 0 0 0 1.058 0L20 14.178 20.002 22H4zM16.707 4.707l-1.414-1.415L13 5.585V1h-2v4.585L8.707 3.292 7.293 4.707 12 9.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
