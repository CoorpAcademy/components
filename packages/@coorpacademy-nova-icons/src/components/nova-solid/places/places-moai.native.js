import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6.805 9H6.5c-.961 0-1.74.741-1.818 1.683L6 12H3.641l-1.319 1.498A.907.907 0 0 0 3 15l-.562 1.684a1 1 0 0 0 .138.901c.187.259.467.415.868.415v1a1 1 0 0 0 1 1h2.889a1 1 0 0 0 1-1v-1l.466-6.864A1.998 1.998 0 0 0 6.805 9zM21.502 4.584A1.841 1.841 0 0 0 20.155 4h-2.64c-.882 0-1.617.621-1.799 1.449L18 8h-3.252L12.2 11.4A.999.999 0 0 0 13 13l-.689 2.758a.999.999 0 0 0 .97 1.242H14v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2l.996-11.033a1.845 1.845 0 0 0-.494-1.383z" />
    </G>
  </Svg>
);

export default SvgComponent;
