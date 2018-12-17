import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10 4h3v2h-3zM11.365 9.95L9.95 11.366 7.828 9.243l1.415-1.414zM4 10h2v3H4zM8 3V2H2v6h1c2.757 0 5-2.243 5-5zM4 5.829V4h1.829A3.016 3.016 0 0 1 4 5.829zM22.207 14.207l-1.414-1.414L15.586 18H4v2h2v3h2v-3h7v3h2v-3.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
