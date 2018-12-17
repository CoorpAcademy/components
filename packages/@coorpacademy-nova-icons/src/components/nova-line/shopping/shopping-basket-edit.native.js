import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.246 9h13.508l-.445 2h2.049l.444-2H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.503 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h6v-2H4.803L3.246 9zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.003 1.003 0 0 0-.264.465l-1 4a1.003 1.003 0 0 0 1.213 1.213l4-1c.176-.044.337-.136.465-.264l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.113.529.527-2.115L17 16.414 18.586 18l-3.098 3.097zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
