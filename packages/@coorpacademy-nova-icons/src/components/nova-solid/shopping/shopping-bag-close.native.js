import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17 6H1L0 20h14a6.002 6.002 0 0 1 3.607-5.502L17 6zM23.707 17.706l-1.414-1.413L20 18.586l-2.293-2.293-1.414 1.413L18.586 20l-2.293 2.293 1.414 1.413L20 21.414l2.293 2.292 1.414-1.413L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
