import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 20.005l-1.907-1.907.106.042a15.504 15.504 0 0 0 .872-8.011 15.38 15.38 0 0 0-4.364-8.589l-1.412 1.416a13.397 13.397 0 0 1 3.8 7.48 13.51 13.51 0 0 1-.479 6.184L15 15.005v4l-2-2v5h5l-2-2h4z" />
      <Path d="M10.5 7.005H2v7h8.5a3.5 3.5 0 1 0 0-7zm0 5H9v-3h1.5a1.5 1.5 0 1 1 0 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
