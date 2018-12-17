import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 8H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h2V9a1 1 0 0 0-1-1zm-4 7H5v-5h6v5zM3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.959 4.959 0 0 0-5.506-.001L3.707.293 2.293 1.708l1.54 1.54A4.963 4.963 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.171A3.006 3.006 0 0 1 8 3zM23.707 17.708l-1.414-1.414L20 18.586l-2.293-2.292-1.414 1.414L18.586 20l-2.293 2.294 1.414 1.414L20 21.414l2.293 2.294 1.414-1.414L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
