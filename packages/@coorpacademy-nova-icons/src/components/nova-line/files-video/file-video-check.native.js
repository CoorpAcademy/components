import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17l7-4-7-4z" />
      <Path d="M2 2h10v4h4v9.007h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h11v-2H2V2z" />
      <Path d="M22.293 16.3L18 20.593 15.707 18.3l-1.414 1.414L18 23.421l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
