import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 22H2v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0l3.001-2.143-1.162-1.628L8 16.771 4.121 14H9v-2H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-6h-2v6zM20.707.293a.999.999 0 0 0-1.414 0l-7 7a1.005 1.005 0 0 0-.263.465l-1.001 4a1.003 1.003 0 0 0 1.213 1.213l4-1.001a.997.997 0 0 0 .465-.263l7-7a.999.999 0 0 0 0-1.414l-3-3zm-5.219 9.803l-2.115.53.53-2.114L17 5.414 18.586 7l-3.098 3.096zM20 5.586L18.414 4 20 2.414 21.586 4 20 5.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
