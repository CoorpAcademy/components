import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 17V9l6.215 3.11A8.96 8.96 0 0 1 18 10.059V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h6.523A8.966 8.966 0 0 1 8 19c0-1.424.34-2.767.929-3.963L5 17zm7-16l5 5h-5V1z" />
      <Path d="M17.707 12.294a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.415v4.587a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.587l1.293 1.294 1.414-1.414-6-6.001zM18 22.002h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
