import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.959 4.959 0 0 0-5.506-.001L3.707.293 2.293 1.708l1.54 1.54A4.963 4.963 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.171A3.006 3.006 0 0 1 8 3zM18 11.994c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4a3.994 3.994 0 0 1-2.827-1.173L17 18.994h-5v5l1.757-1.757A5.96 5.96 0 0 0 18 23.994c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
      <Path d="M16 10V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-5H5v-5h11z" />
    </G>
  </Svg>
);

export default SvgComponent;
