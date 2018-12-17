import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 20.001h2.231a8.964 8.964 0 0 1-.231-2 9 9 0 0 1 9-9c.338 0 .672.023 1 .059V1.001a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM20.707 11.294a1 1 0 0 0-1.414 0l-7 7a1.01 1.01 0 0 0-.263.465l-1.001 4c-.084.341.016.702.264.95a.998.998 0 0 0 .949.263l4-1c.177-.044.337-.136.465-.263l7-7a.999.999 0 0 0 0-1.414l-3-3.001zm-5.219 9.804l-2.115.529.53-2.114L17 16.415l1.586 1.586-3.098 3.097zM20 16.588l-1.586-1.587L20 13.415l1.586 1.586L20 16.588z" />
    </G>
  </Svg>
);

export default SvgComponent;
