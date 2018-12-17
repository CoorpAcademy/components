import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 17.001l-3-6-2 4-2-2-3 4z" />
      <Circle cx={7} cy={10.001} r={2} />
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-2H2V2h10v4h4l.001 11.002H18V4.586zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
