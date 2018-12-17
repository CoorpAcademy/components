import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 2.001a6.96 6.96 0 0 0-6.438 4.254A4.915 4.915 0 0 0 7 6.001c-2.757 0-5 2.243-5 5s2.243 5 5 5h2v-2H7c-1.654 0-3-1.346-3-3s1.346-3 3-3c.57 0 1.131.166 1.618.48a1.003 1.003 0 0 0 1.517-.613A4.971 4.971 0 0 1 15 4.001c2.757 0 5 2.243 5 5s-2.243 5-5 5v2c3.859 0 7-3.14 7-7 0-3.859-3.141-7-7-7z" />
      <Path d="M15.293 17.294L13 19.587v-8.586h-2v8.586l-2.293-2.293-1.414 1.414L12 23.415l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
