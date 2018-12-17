import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 17.999c0-.689.085-1.356.231-2H2v-12h8v8.349a9.025 9.025 0 0 1 2-1.831V1.999c0-1.103-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h6.231a9.03 9.03 0 0 1-.231-2zM20.707 11.292a.999.999 0 0 0-1.414 0l-7 7a1.006 1.006 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1c.176-.044.336-.136.465-.264l7-7a1 1 0 0 0 0-1.414l-3.001-3zm-5.219 9.804l-2.114.529.53-2.114L17 16.413l1.586 1.586-3.098 3.097zM20 16.586l-1.586-1.587L20 13.413l1.586 1.586L20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
