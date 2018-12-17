import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6.708 6.293c-1.685-1.684-.292-3.286.005-3.59-.875-.864-.53-.521-1.419-1.41-1.289 1.289-2.352 4.061 0 6.413l1.414-1.413zM8.405 5.293l1.414 1.413c1.986-1.986 1.089-4.326 0-5.413l-1.42 1.408c.3.31 1.185 1.412.006 2.592zM21 12H3a1 1 0 0 0-1 1c0 5.515 4.486 10 10 10s10-4.485 10-10a1 1 0 0 0-1-1zM19.001 3c-1.607-.804-5.151 5.496-6.481 8h4.954c.992-2.17 3.091-7.217 1.527-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
