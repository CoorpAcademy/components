import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 14h2v2H8z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM12 20h-2v-2H8v2H6v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7zm6-6h-1v4h1v2h-4v-2h1v-4h-1v-2h4v2zm-3-7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
