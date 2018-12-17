import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.001h10v4h4v1h2V5.587l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM22 12.001v-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-3h-3v2h1v1h-2v-4h4zM8 15.501c0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H8v-2H4.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H2v2h3.5c1.378 0 2.5-1.122 2.5-2.5zM12.942 10.001l-.957 3.901L11 10.001H9l1.963 8h2.058L13 17.92l2-7.919z" />
    </G>
  </Svg>
);

export default SvgComponent;
