import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 .001c-1.594 0-3.07.837-4 2.08C8.07.838 6.594.001 5 .001c-2.757 0-5 2.243-5 5 0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0C9.876 15.633 18 10.492 18 5.001c0-2.757-2.243-5-5-5zM20.707 11.294a.999.999 0 0 0-1.414 0l-7 7c-.128.129-.22.289-.264.465l-1 4a1.001 1.001 0 0 0 1.213 1.213l4-1c.176-.044.336-.136.465-.263l7-7a.999.999 0 0 0 0-1.414l-3-3.001zm-5.22 9.804l-2.114.529.529-2.114 3.097-3.098 1.586 1.586-3.098 3.097zM20 16.588l-1.587-1.587L20 13.415l1.586 1.586L20 16.588z" />
    </G>
  </Svg>
);

export default SvgComponent;
