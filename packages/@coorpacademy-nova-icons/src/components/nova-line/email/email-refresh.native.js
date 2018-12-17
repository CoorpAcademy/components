import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 22H2v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0l4.274-3.053-1.162-1.628L8 16.771 4.12 14H10v-2H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-7h-2v7zM18 10c-1.077 0-2.064-.439-2.811-1.189L17 7h-5v5l1.762-1.761A5.938 5.938 0 0 0 18 12c3.309 0 6-2.691 6-6h-2c0 2.206-1.795 4-4 4zM22.24 1.761A5.941 5.941 0 0 0 18 0c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4 1.078 0 2.064.44 2.811 1.189L19 5h5V0l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
