import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17 6H1L0 20h15c0-1.921 1.096-3.569 2.685-4.407L17 6zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
