import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 22H2V8h10.09A5.998 5.998 0 0 1 12 7c0-.341.035-.672.09-1H0v18h18V13a5.97 5.97 0 0 1-2-.349V22z" />
      <Path d="M4 10h4v4H4zM4 16h4v4H4zM10 16h4v4h-4zM10 14h4v-2.537A6.008 6.008 0 0 1 12.809 10H10v4zM22.707 4.707l-1.414-1.414L17 7.586l-2.293-2.293-1.414 1.414L17 10.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
