import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.607 18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.345-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM9 5.228a15.87 15.87 0 0 0-8.707 4.46l1.414 1.414A13.884 13.884 0 0 1 9 7.248v-2.02zM17 0c-3.859 0-7 3.141-7 7 0 3.86 3.141 7 7 7 3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7zm0 12c-2.757 0-5-2.242-5-5 0-2.756 2.243-5 5-5s5 2.244 5 5c0 2.758-2.243 5-5 5z" />
      <Path d="M16 7h2v4h-2z" />
      <Circle cx={17} cy={5} r={1} />
      <Path d="M9 9.302a11.927 11.927 0 0 0-5.878 3.212l1.414 1.414A9.93 9.93 0 0 1 9 11.358V9.302zM11 13.031a7.934 7.934 0 0 0-5.049 2.313l1.415 1.414A5.953 5.953 0 0 1 11 15.031v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
