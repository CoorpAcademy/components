import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 20.001h6.08a7.026 7.026 0 0 1-.08-1c0-3.526 2.609-6.434 6-6.92V1.001a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM23.707 19.293L19 14.586l-4.707 4.707 1.414 1.414L18 18.414v5.587h2v-5.587l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
