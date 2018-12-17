import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.345 18.001H2.655l-1.288 3.734c-.186.557-.109 1.129.208 1.57s.837.696 1.425.696h18c.588 0 1.107-.254 1.425-.695s.394-1.014.208-1.57l-1.288-3.735zm-7.345 4h-4v-2h4v2zM21 8.002a1 1 0 0 0-1-1h-4.586l2.707 2.707L12 15.83 5.879 9.708l2.707-2.707H4a1 1 0 0 0-1 1v9h18V8.002z" />
    </G>
    <Path
      fill="currentColor"
      d="M15.293 8.295L13 10.587V2.001h-2v8.586L8.707 8.295 7.293 9.708 12 14.416l4.707-4.708z"
    />
  </Svg>
);

export default SvgComponent;
