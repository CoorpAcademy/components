import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.5 12.005a3.5 3.5 0 0 0-3.5 3.5v2a3.5 3.5 0 0 0-7 0v6.5h14v-8.5a3.5 3.5 0 0 0-3.5-3.5zm-5.5 7H5v-1.5a1.5 1.5 0 1 1 3 0v1.5zm7-2h-3v-1.5a1.5 1.5 0 1 1 3 0v1.5zM18 1.005c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm1.293 7.707L17 6.419V3.005h2v2.586l1.707 1.707-1.414 1.414z" />
      <Path d="M6.5 12.005c1.029 0 1.968.362 2.727.946l1.428-1.428a6.451 6.451 0 0 0-4.154-1.518c-3.091 0-5.679 2.17-6.335 5.064l1.864 1.864c-.015-.142-.03-.283-.03-.428 0-2.482 2.019-4.5 4.5-4.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
