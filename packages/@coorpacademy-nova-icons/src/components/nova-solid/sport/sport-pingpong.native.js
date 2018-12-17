import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.139 9.412c-.248 1.778.121 3.626 1.15 5.178L4 17.879A1.5 1.5 0 1 0 6.121 20l3.289-3.289a7.475 7.475 0 0 0 5.178 1.149L6.139 9.412zM18.849 5.151a7.497 7.497 0 0 0-10.606 0 7.483 7.483 0 0 0-1.461 2.074l9.993 9.992a7.467 7.467 0 0 0 2.075-1.461 7.499 7.499 0 0 0-.001-10.605zM14.561 9.44a2 2 0 1 1 .001-4.001 2 2 0 0 1-.001 4.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
