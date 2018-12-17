import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.004h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .898-2 2v5h2v-5zM19 21.004H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM9 10.004v8h2v-2h1c1.654 0 3-1.345 3-3 0-1.654-1.346-3-3-3H9zm4 3c0 .552-.449 1-1 1h-1v-2h1c.551 0 1 .449 1 1zM4 14.307l.168.252c.371.557 1.293.557 1.664 0L6 14.307v3.697h2v-7a1.002 1.002 0 0 0-1.832-.555L5 12.202 3.832 10.45A.998.998 0 0 0 2 11.004v7h2v-3.697zM21 14.004v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-.97.758l-1 4a1 1 0 0 0 .97 1.242h2v2h2v-2h1v-2h-1zm-2 0h-.719l.5-2H19v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
