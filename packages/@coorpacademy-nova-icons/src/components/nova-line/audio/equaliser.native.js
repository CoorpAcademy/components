import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 19h5v3H2zM9 19h5v3H9zM16 19h5v3h-5zM2 14h5v3H2zM9 14h5v3H9zM16 14h5v3h-5zM2 9h5v3H2zM9 9h5v3H9zM9 4h5v3H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
