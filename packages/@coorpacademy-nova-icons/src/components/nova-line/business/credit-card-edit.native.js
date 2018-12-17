import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.998v2H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12c0 1.103.896 2 2 2h9v-2H2V7zm16-5l-.001 3H2V2h16zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.005 1.005 0 0 0-.264.464l-1 4a1.002 1.002 0 0 0 1.213 1.214l4-1c.176-.044.337-.136.465-.264l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.805l-2.113.528.527-2.115L17 16.414 18.586 18l-3.098 3.098zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
