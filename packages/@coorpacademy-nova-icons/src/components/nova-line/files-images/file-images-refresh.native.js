import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={10.001} r={2} />
      <Path d="M7 13.001l-3 4h6v-4l-1 2z" />
      <Path d="M2 2h10v4h4v4.002h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M18 22c-1.077 0-2.064-.44-2.811-1.189L17 19h-5v5l1.761-1.761A5.937 5.937 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4zM22.24 13.761A5.941 5.941 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.188L19 17h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
