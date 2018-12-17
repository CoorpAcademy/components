import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 8c-1.074 0-2.09.25-3 .686V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3.11A6.976 6.976 0 0 0 5 15c0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.859-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Circle cx={12} cy={16.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
