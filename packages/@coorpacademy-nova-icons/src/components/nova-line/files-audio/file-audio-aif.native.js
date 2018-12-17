import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.003H5c-1.103 0-2 .897-2 2v5h2v-5h10v4h4v1h2V5.589l-4.586-4.586zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM5 16.003h2v2h2v-7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7h2v-2zm0-4h2v2H5v-2zM15 12.003v6h2v-3h3v-2h-3v-1h4v-2h-4c-1.103 0-2 .897-2 2zM10 16.003v2h4v-2h-1v-4h1v-2h-4v2h1v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
