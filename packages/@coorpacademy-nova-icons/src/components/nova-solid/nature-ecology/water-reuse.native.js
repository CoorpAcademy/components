import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M12 21c-4.054 0-7.489-2.696-8.611-6.389L6 12H0v6l1.827-1.827C3.475 20.174 7.412 23 12 23c5.382 0 9.865-3.888 10.809-9h-2.041c-.913 4.002-4.494 7-8.768 7zM22.173 7.827C20.525 3.827 16.588 1 12 1 6.618 1 2.135 4.888 1.191 10h2.041C4.144 5.998 7.726 3 12 3c4.055 0 7.489 2.696 8.611 6.389L18 12h6V6l-1.827 1.827z" />
      <Path d="M16 14c0-3-4-8-4-8s-4 5-4 8a4 4 0 0 0 8 0zm-4 .951a2.518 2.518 0 0 0 1.286-1.288h1.059A3.515 3.515 0 0 1 12 16v-1.049z" />
    </G>
  </Svg>
);

export default SvgComponent;
