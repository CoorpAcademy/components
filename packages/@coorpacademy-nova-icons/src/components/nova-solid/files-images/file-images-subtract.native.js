import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 15.423V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h13.421A4.97 4.97 0 0 1 15 20.001a4.996 4.996 0 0 1 3-4.578zM12 1l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8zM3 19l3-4 2 2 4-5 3 7H3zM17 19.001h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
