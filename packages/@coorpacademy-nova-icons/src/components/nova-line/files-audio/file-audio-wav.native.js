import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 10.003h-2.058l-.957 3.901L20 10.003h-2l1.963 8h2.058L22 17.922zM4.021 18.003c-.032-.126.932-3.851.965-3.983.006.025.968 3.983.994 3.983h2.041c-.032-.126 1.948-7.874 1.979-8H7.942l-.957 3.901L6 10.003H3.942l-.957 3.901L2 10.003H0l1.963 8h2.058zM17 18.003v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2h-2zM5 3.003h10v4h4v1h2V5.589l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
