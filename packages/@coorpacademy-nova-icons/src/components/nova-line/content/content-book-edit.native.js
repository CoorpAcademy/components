import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M9 18.001H6v-16h10v8h2v-9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8v-2zm-5 0H2v-16h2v16zM20.707 11.293a1 1 0 0 0-1.414 0l-7 7a1.01 1.01 0 0 0-.263.465l-1.001 4a1.003 1.003 0 0 0 1.213 1.213l4-1c.177-.044.337-.136.465-.263l7-7a1 1 0 0 0 0-1.415l-3-3zm-5.219 9.804l-2.115.529.53-2.114L17 16.415 18.586 18l-3.098 3.097zM20 16.587L18.414 15 20 13.415 21.586 15 20 16.587z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
