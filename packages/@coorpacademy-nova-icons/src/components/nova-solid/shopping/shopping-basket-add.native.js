import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2zM20 9V7h-3.42L12.868.503l-1.736.993L14.277 7H5.723l3.145-5.504L7.132.503 3.42 7H0v2zM18.58 10H1.42l1.604 7.217A.998.998 0 0 0 4 18h10.349a6.008 6.008 0 0 1 3.228-3.485L18.58 10z" />
    </G>
  </Svg>
);

export default SvgComponent;
