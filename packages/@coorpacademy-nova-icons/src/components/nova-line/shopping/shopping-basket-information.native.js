import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 9V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.503 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h4v-2H4.803L3.246 9H20z" />
      <Path d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Path d="M16 17h2v4h-2z" />
      <Circle cx={17} cy={15} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
