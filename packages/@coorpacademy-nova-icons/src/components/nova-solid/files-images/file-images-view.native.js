import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.682 19H3l3-4 2 2 1.014-1.267c.142-3.741 3.21-6.732 6.986-6.732a6.99 6.99 0 0 1 2 .294V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.406a7.013 7.013 0 0 1-2.724-3zM12 1l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8z" />
      <Path d="M20.167 18.754A4.961 4.961 0 0 0 21 16.001c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.956 4.956 0 0 0 2.753-.833L22 23.415l1.414-1.414-3.247-3.247zM16 19.001c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
