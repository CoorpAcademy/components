import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.001H5c-1.103 0-2 .897-2 2v5h2v-5h10v4h4v1h2V5.587l-4.586-4.586zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM15 12.001v6h2v-3h3v-2h-3v-1h4v-2h-4c-1.103 0-2 .897-2 2zM5 18.001h2c1.103 0 2-.897 2-2v-3H6v2h1v1H5v-4h4v-2H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2zM10 16.001v2h4v-2h-1v-4h1v-2h-4v2h1v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
