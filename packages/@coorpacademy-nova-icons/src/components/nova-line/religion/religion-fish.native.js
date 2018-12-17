import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <Path
      d="M22 6h-2c0 1.571-.405 3.05-1.116 4.337A10.972 10.972 0 0 0 11 7c-4.417 0-8.749 4.198-8.923 4.619l-.256.617.473.472C2.469 12.883 6.636 17 11 17c3.089 0 5.884-1.28 7.884-3.337A8.947 8.947 0 0 1 20 18h2c0-2.212-.656-4.273-1.784-6A10.934 10.934 0 0 0 22 6zm-11 9c-2.557 0-5.216-1.925-6.502-3.001C5.781 10.923 8.434 9 11 9c2.66 0 5.054 1.16 6.703 3A8.981 8.981 0 0 1 11 15z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
