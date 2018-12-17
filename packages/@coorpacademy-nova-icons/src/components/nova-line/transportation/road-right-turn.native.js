import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M22 1h-4C8.626 1 1 8.626 1 18v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4c0-3.86 3.14-7 7-7h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 8h-3c-4.962 0-9 4.038-9 9v3H3v-3C3 9.729 9.729 3 18 3h3v6z" />
      <Path d="M5.013 17.406l1.998.09c.049-1.089.258-2.159.621-3.18l-1.885-.67a12.957 12.957 0 0 0-.734 3.76zM7.551 10.266l1.606 1.191a11.051 11.051 0 0 1 2.292-2.294l-1.192-1.605a13.057 13.057 0 0 0-2.706 2.708zM13.635 5.752l.671 1.883c1.02-.363 2.09-.573 3.18-.624l-.093-1.998c-1.287.06-2.552.309-3.758.739z" />
    </G>
  </Svg>
);

export default SvgComponent;
