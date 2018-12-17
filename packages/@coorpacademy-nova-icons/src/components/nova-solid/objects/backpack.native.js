import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M5 13c-1.654 0-3 1.346-3 3h3v-3zM6 10h2V7h2v3h4V7h2v3h2a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3H8C6.346 2 5 3.346 5 5v4a1 1 0 0 0 1 1zM19 16h3c0-1.654-1.346-3-3-3v3zM19 17v5h2a1 1 0 0 0 1-1v-4h-3zM5 17H2v4a1 1 0 0 0 1 1h2v-5zM18 11h-2v2h-2v-2h-4v2H8v-2H6v11h12V11zm-3 6H9v-2h6v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
