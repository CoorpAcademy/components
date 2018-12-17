import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54L12.293.293l-1.54 1.54a4.964 4.964 0 0 0-5.506 0L3.707.293 2.293 1.707l1.54 1.54A4.972 4.972 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.172A3.002 3.002 0 0 1 8 3zM16 15V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v5h2zm-5 0H5v-5h6v5zM22.293 16.287L18 20.58l-2.293-2.293-1.414 1.414L18 23.408l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
