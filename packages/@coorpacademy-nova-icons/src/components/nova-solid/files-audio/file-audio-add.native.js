import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 14.352V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12.347A5.992 5.992 0 0 1 14 20.004a6 6 0 0 1 4-5.652zm-5.368-3.09L10 10.385v6.113a2.5 2.5 0 1 1-2-2.449V7.61l5.265 1.754-.633 1.898zM12 6V1l5 5h-5zM21 19.004v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
