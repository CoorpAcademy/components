import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.5 12.005a3.5 3.5 0 0 0-3.5 3.5v8.5h7v-8.5a3.5 3.5 0 0 0-3.5-3.5zm1.5 5h-3v-1.5a1.5 1.5 0 1 1 3 0v1.5zM22 6.005l-3-3v2h-2v2h2v2z" />
      <Path d="M11.5 8.005c-3.09 0-5.679 2.17-6.335 5.064l1.864 1.864A4.047 4.047 0 0 1 7 14.505c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .145-.014.286-.029.429l1.864-1.864c-.656-2.895-3.245-5.065-6.335-5.065z" />
    </G>
  </Svg>
);

export default SvgComponent;
