import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2.92 8H4v3h2V8h6v3h2V8h1.08l.25 3h2.007l-.341-4.083A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h8v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.003 1.003 0 0 0-.264.465l-1 4a1.003 1.003 0 0 0 1.213 1.213l4-1c.176-.044.337-.136.465-.264l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.113.529.527-2.115L17 16.414 18.586 18l-3.098 3.097zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
