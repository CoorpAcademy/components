import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18.001H6v-16h10v7.994h2V1.001a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2zm-6 0H2v-16h2v16zM18 22.001c-1.077 0-2.064-.44-2.811-1.189L17 19.001h-5v5l1.762-1.761A5.934 5.934 0 0 0 18 24.001c3.309 0 6-2.691 6-6h-2c0 2.206-1.795 4-4 4z" />
      <Path d="M22.24 13.762A5.941 5.941 0 0 0 18 12.001c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4 1.078 0 2.064.44 2.811 1.188L19 17.001h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
