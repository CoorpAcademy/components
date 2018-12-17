import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.554 11.001c.907 1.135 1.444 2.513 1.444 4 0 3.86-3.589 7-8 7H3.291l1.328-1.43a1 1 0 0 0 .021-1.338c-1.074-1.232-1.642-2.695-1.642-4.232 0-3.859 3.589-7 8-7v-2c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.265 22.321a.999.999 0 0 0 .733 1.68h10c5.514 0 10-4.037 10-9a8.214 8.214 0 0 0-1.055-4h-2.389zM21.291 3.294l-2.293 2.293V.001h-2v5.586l-2.293-2.293-1.414 1.414 4.707 4.707 4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
