import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M20 19c0 .449-.551 1-1 1H5c-.449 0-1-.551-1-1H2c0 1.542 1.458 3 3 3h14c1.542 0 3-1.458 3-3h-2zM17.229 19l1.766-15.89A1 1 0 0 0 18 2H6a.997.997 0 0 0-.994 1.11L6.772 19h10.457zm-1.335-6l-.333 3H8.439l-.333-3h7.788z" />
    </G>
  </Svg>
);

export default SvgComponent;
