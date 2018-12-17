import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 0h-7a.997.997 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.997.997 0 0 0 20 8V1a1 1 0 0 0-1-1zm-4 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM20.707 11.293a.999.999 0 0 0-1.414 0l-7 7a1.015 1.015 0 0 0-.263.465l-1.001 4a1.002 1.002 0 0 0 1.213 1.213l4-1a.998.998 0 0 0 .465-.264l7-7a.999.999 0 0 0 0-1.414l-3-3zm-5.219 9.804l-2.115.529.53-2.114L17 16.414 18.586 18l-3.098 3.097zM20 16.587L18.414 15 20 13.414 21.586 15 20 16.587z" />
    </G>
  </Svg>
);

export default SvgComponent;
