import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 16V8h7V6.369C11 5.266 10.104 4 9 4H4C2.895 4 2 5.266 2 6.369v12C2 19.475 2.895 20 4 20h5c1.104 0 2-.525 2-1.631V16H4zM20.001 4H15c-1.104 0-2 1.266-2 2.369V8h7v8h-7v2.369c0 1.106.896 1.631 2 1.631h5c1.104 0 2-.525 2-1.631v-12C22 5.264 21.105 4 20.001 4z" />
      <Path d="M14.707 11.077l-1.414-1.415L12 10.955l-1.293-1.293-1.414 1.415 1.293 1.292-1.293 1.293 1.414 1.415L12 13.783l1.293 1.294 1.414-1.415-1.293-1.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
