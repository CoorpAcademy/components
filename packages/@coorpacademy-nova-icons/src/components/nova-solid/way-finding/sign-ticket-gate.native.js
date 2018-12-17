import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 12h2v-1.05c1.14-.233 2-1.243 2-2.45C15 7.122 13.878 6 12.5 6h-1a.5.5 0 0 1 0-1H15V3h-2V2h-2v1.051C9.86 3.283 9 4.293 9 5.5 9 6.878 10.122 8 11.5 8h1a.5.5 0 0 1 0 1H9v2h2v1zM2 10h5v12H2zM17 10h5v12h-5zM8 17h2.4l1.2-3H8zM12.4 17H16v-3h-2.4z" />
    </G>
  </Svg>
);

export default SvgComponent;
