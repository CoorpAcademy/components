import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1.003 1.003 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5a4.95 4.95 0 0 1-1.021 2.994h2.339A6.956 6.956 0 0 0 20 7c0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h5v-2zM18 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4-1.069 0-2.074-.416-2.779-1.119l-.047-.054L17 19h-5v5l1.758-1.757A5.954 5.954 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
