import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM20 9.523V5.002H0V16c0 1.103.896 2 2 2h6a9 9 0 0 1 9-9c1.054 0 2.06.19 3 .523zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.114.529.529-2.114L17 16.414 18.586 18l-3.098 3.097zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
