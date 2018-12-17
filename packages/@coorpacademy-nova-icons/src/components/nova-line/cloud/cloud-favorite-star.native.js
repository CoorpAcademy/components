import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1.003 1.003 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5 0 1.13-.391 2.162-1.025 3h2.34c.435-.91.685-1.926.685-3 0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h5v-2zM17 12l1.714 4.286H23l-3.708 3.13L21.285 24 17 21.166 12.714 24l1.994-4.584L11 16.286h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
