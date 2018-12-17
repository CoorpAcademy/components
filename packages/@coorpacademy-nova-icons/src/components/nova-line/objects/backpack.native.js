import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M9 14h6v2H9z" />
      <Path d="M19 13h-1v-2a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3H8C6.346 2 5 3.346 5 5v5a1 1 0 0 0 1 1v2H5c-1.654 0-3 1.346-3 3v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5c0-1.654-1.346-3-3-3zm0 2c.551 0 1 .448 1 1h-2v-1h1zM7 5c0-.552.449-1 1-1h8c.551 0 1 .448 1 1v4h-2V7h-2v2h-2V7H9v2H7V5zM5 15h1v1H4c0-.552.449-1 1-1zm-1 3h2v2H4v-2zm4-7h1v1h2v-1h2v1h2v-1h1v9H8v-9zm10 9v-2h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
