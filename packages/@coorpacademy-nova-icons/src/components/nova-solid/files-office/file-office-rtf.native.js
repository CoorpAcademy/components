import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.75 15.5H6V17h.75a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.263l-.875-1.5H6V20H4.5v-6h2.25A2.252 2.252 0 0 1 9 16.25c0 .809-.432 1.513-1.074 1.91L9 20zm5.5-4.5H13V20h-1.5v-4.5H10V14h4.5v1.5zm5 0h-3v.75h2.25v1.5H16.5V20H15v-4.5c0-.827.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
