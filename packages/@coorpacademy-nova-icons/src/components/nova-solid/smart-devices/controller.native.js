import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M5.882 5.851l-1.53-1.289A9.994 9.994 0 0 1 12.006 1a9.991 9.991 0 0 1 7.64 3.547l-1.527 1.291A7.992 7.992 0 0 0 12.007 3a7.99 7.99 0 0 0-6.125 2.851z"
    />
    <Path
      fill="currentColor"
      d="M15.209 8.601c-.764-1.018-1.931-1.602-3.202-1.602s-2.438.583-3.2 1.6L7.207 7.4a6.024 6.024 0 0 1 4.8-2.4 5.95 5.95 0 0 1 4.802 2.402l-1.6 1.199z"
    />
    <G fill="currentColor">
      <Circle cx={16} cy={16.001} r={1} />
      <Circle cx={8} cy={16.001} r={1} />
      <Path d="M19 10.001h-6v-2h-2v2H5c-1.103 0-2 .896-2 2v8c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2v-8c0-1.104-.897-2-2-2zm-11 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm8 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
