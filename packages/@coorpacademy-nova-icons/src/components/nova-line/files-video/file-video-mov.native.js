import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.004H5c-1.103 0-2 .898-2 2v5h2v-5h10v4h4v1h2V5.59l-4.586-4.586zM19 21.004H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM15 15.004v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2c0 1.655 1.346 3 3 3s3-1.345 3-3zm-4 0v-2a1.001 1.001 0 0 1 2 0v2a1 1 0 0 1-2 0zM17.985 13.905L17 10.004h-2l1.963 8h2.058L19 17.923l2-7.919h-2.058zM4 14.307l.168.252c.371.557 1.293.557 1.664 0L6 14.307v3.697h2v-7a1 1 0 0 0-1.832-.555L5 12.202 3.832 10.45A1 1 0 1 0 2 11.004v7h2v-3.697z" />
    </G>
  </Svg>
);

export default SvgComponent;
