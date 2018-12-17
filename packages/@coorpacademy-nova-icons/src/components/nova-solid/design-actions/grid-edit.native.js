import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 10h4v4H4zM4 16h4v4H4zM10 16h4v4h-4z" />
      <Path d="M16 22H2V8h7V6H0v18h18v-9h-2z" />
      <Path d="M23.707 3.293l-3-3a1 1 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.114.529.529-2.114L17 5.414 18.586 7l-3.098 3.097zM20 5.586L18.414 4 20 2.414 21.586 4 20 5.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
