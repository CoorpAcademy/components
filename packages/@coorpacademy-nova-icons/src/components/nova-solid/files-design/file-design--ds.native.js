import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.75 15.5v3a1.5 1.5 0 0 0 0-3z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM8.5 19.25a.75.75 0 0 1-.75.75h-3v-1.5H7v-.75H4.75v-1.5H7v-.75H4.75V14h3a.75.75 0 0 1 .75.75v4.5zm2.25.75h-1.5v-6h1.5c1.654 0 3 1.347 3 3 0 1.655-1.346 3-3 3zM19 15.5h-2.625a.374.374 0 1 0 0 .75h.75c1.034 0 1.875.842 1.875 1.875A1.876 1.876 0 0 1 17.125 20H14.5v-1.5h2.625a.374.374 0 1 0 0-.75h-.75a1.876 1.876 0 0 1-1.875-1.875c0-1.033.841-1.875 1.875-1.875H19v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
