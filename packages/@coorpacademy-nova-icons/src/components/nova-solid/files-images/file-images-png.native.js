import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.75 15.5H6V17h.75a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM6.75 18.5H6V20H4.5v-6h2.25C7.991 14 9 15.01 9 16.25a2.252 2.252 0 0 1-2.25 2.25zm7.5.75a.752.752 0 0 1-.75.75.75.75 0 0 1-.624-.334l-1.626-2.438V20h-1.5v-5.25a.75.75 0 0 1 1.374-.416l1.626 2.44V14h1.5v5.25zm5.25-3.75h-3v3H18v-.75h-.75v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
