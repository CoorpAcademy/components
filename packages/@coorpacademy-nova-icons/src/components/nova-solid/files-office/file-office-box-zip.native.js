import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.375 10.75H17.5v1.75h.875c.482 0 .875-.393.875-.875s-.393-.875-.875-.875z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.25 16H3.875a.875.875 0 0 1-.728-1.36l2.593-3.89H3V9h4.375a.877.877 0 0 1 .728 1.361L5.51 14.25h2.74V16zm5.25-5.25h-.875v3.5h.875V16H10v-1.75h.875v-3.5H10V9h3.5v1.75zm4.875 3.5H17.5V16h-1.75V9h2.625A2.629 2.629 0 0 1 21 11.625a2.628 2.628 0 0 1-2.625 2.625z" />
    </G>
  </Svg>
);

export default SvgComponent;
