import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 20.001h4.262a8.045 8.045 0 0 1-.262-2 8 8 0 0 1 8-8v-9a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM18.001 22.001c-1.077 0-2.064-.44-2.811-1.189l1.811-1.811h-5v5l1.764-1.764a6.032 6.032 0 0 0 4.236 1.764c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.24 13.762a5.937 5.937 0 0 0-4.239-1.761c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.188L19.001 17h5v-5l-1.761 1.762z" />
    </G>
  </Svg>
);

export default SvgComponent;
