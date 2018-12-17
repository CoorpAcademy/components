import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 9c.338 0 .671.023 1 .059V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2 2 2h6.946A8.946 8.946 0 0 1 8 18.002l-5 .001v-2h2V7h2v9.002h1V12h2v.349a9.135 9.135 0 0 1 1-1.044V10h1.889A8.953 8.953 0 0 1 17 9zm-5-8l5 5h-5V1zM23.707 14.295l-3-3a.997.997 0 0 0-1.414 0l-7 7a.993.993 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.262l7-7.001a.998.998 0 0 0 0-1.413zm-8.219 6.803l-2.114.53.529-2.115L17 16.415l1.586 1.586-3.098 3.097zM20 16.587l-1.586-1.586L20 13.415l1.586 1.586L20 16.587z" />
    </G>
  </Svg>
);

export default SvgComponent;
