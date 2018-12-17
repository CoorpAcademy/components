import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.414 0H10C8.897 0 8 .898 8 2v14c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4.586L17.414 0zm2.587 16H10V2h6v4h4l.001 10z" />
      <Path d="M7 3H5v16c0 1.103.897 2 2 2h12v-2H7V3z" />
      <Path d="M4 6H2v16c0 1.103.897 2 2 2h12v-2H4V6z" />
    </G>
  </Svg>
);

export default SvgComponent;
