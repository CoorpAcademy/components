import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v2h20V2zM13 8h4v1a8.98 8.98 0 0 1 3 .523V6H0v8c0 1.102.896 2 2 2h6.231A9.007 9.007 0 0 1 13 9.946V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2zM23.707 14.293l-3-3a1 1 0 0 0-1.414 0l-7 7c-.128.129-.219.29-.263.465l-1 4A.997.997 0 0 0 12 24a.995.995 0 0 0 .242-.029l4-1c.176-.045.337-.136.465-.264l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.114.53.529-2.114L17 16.415 18.586 18l-3.098 3.097zM20 16.586L18.414 15 20 13.415 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
