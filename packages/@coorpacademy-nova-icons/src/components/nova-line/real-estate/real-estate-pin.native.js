import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.415 18.586 12H18z" />
      <Path d="M9 14c0 2.199 1.606 4.02 3 5.415 1-1 3-2.97 3-5.415 0-1.654-1.346-3-3-3s-3 1.346-3 3zm4 0c0 .829-.51 1.756-1 2.44-.49-.684-1-1.611-1-2.44a1.001 1.001 0 0 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
