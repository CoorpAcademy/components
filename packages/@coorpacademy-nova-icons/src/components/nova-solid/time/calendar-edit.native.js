import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 18a9 9 0 0 1 9-9c1.054 0 2.06.19 3 .523V5.001c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h6.231A9.032 9.032 0 0 1 8 18zM2 5.001h16v3H2v-3zM20.706 11.293a1 1 0 0 0-1.414 0l-7 7a1.01 1.01 0 0 0-.263.465l-1.001 4a1.002 1.002 0 0 0 1.213 1.213l4-1c.176-.044.336-.136.465-.263l7-7a1 1 0 0 0 0-1.414l-3-3.001zm-5.219 9.804l-2.114.529.53-2.114 3.096-3.098L18.585 18l-3.098 3.097zM20 16.587L18.413 15 20 13.415 21.585 15 20 16.587z" />
    </G>
  </Svg>
);

export default SvgComponent;
