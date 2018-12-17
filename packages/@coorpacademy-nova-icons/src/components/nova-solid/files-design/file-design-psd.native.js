import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.75 15.5H6V17h.75a.75.75 0 1 0 0-1.5zM16.5 15.5v3a1.5 1.5 0 0 0 0-3z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM6.75 18.5H6V20H4.5v-6h2.25C7.99 14 9 15.011 9 16.25c0 1.242-1.01 2.25-2.25 2.25zm7.5-3h-2.625a.375.375 0 0 0 0 .75h.75c1.034 0 1.875.842 1.875 1.875A1.876 1.876 0 0 1 12.375 20H9.75v-1.5h2.625a.374.374 0 1 0 0-.75h-.75a1.876 1.876 0 0 1-1.875-1.875c0-1.033.841-1.875 1.875-1.875h2.625v1.5zM16.5 20H15v-6h1.5c1.654 0 3 1.347 3 3 0 1.655-1.346 3-3 3zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
