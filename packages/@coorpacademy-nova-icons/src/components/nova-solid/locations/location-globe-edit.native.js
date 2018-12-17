import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M4 13V7l3-2V.459C2.943 1.734 0 5.523 0 10c0 4.902 3.53 8.974 8.186 9.828A9.032 9.032 0 0 1 8 18c0-.833.122-1.635.333-2.4L4 13zM14 9.523A8.951 8.951 0 0 1 17 9a8.95 8.95 0 0 1 2.976.515A9.995 9.995 0 0 0 14 .838V4h-3v3h3v2.523zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.114.529.529-2.114L17 16.414 18.586 18l-3.098 3.097zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
