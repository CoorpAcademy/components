import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 14.007H8v2h1a1.001 1.001 0 0 0 0-2z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9 18.007H8v2H6v-8h3c1.654 0 3 1.346 3 3s-1.346 3-3 3zm9 2h-5v-8h2v6h3v2zm-3-13v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
