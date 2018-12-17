import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M19.774 6.709l-1.554 1.26A7.898 7.898 0 0 1 20 13c0 4.411-3.589 8-8 8s-8-3.589-8-8c0-3.383 2.114-6.275 5.088-7.443A1.994 1.994 0 0 0 11 7h3V1h-3a2 2 0 0 0-2 2v.461C4.947 4.738 2 8.531 2 13c0 5.514 4.486 10 10 10s10-4.486 10-10c0-2.285-.791-4.519-2.226-6.291z" />
      <Path d="M15 1h2v2h-2zM15 5h2v2h-2zM16 17v-1h2v-3l-2-4H8l-2 4v3h2v1h2v-1h4v1h2zm-7-7h6l1 2H8l1-2zm1 5H8v-1h2v1zm4-1h2v1h-2v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
