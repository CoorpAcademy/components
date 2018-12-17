import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.521 11.761A8.967 8.967 0 0 1 18 9.058V4.584L13.414-.002H2c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h6.946a8.951 8.951 0 0 1-.53-6.707L5 16.999v-8l5.521 2.762zM12 .998l5 5h-5v-5zM23.707 14.292l-3-3a1 1 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.114.529.529-2.114L17 16.413 18.586 18l-3.098 3.096zM20 16.586L18.414 15 20 13.413 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
