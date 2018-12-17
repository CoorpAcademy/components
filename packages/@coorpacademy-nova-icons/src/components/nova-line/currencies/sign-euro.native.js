import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17 5V3c-3.909 0-7.235 2.51-8.475 6H6v2h2.059c-.037.329-.059.662-.059 1s.022.672.059 1H6v2h2.525c1.239 3.49 4.565 6 8.475 6v-2c-2.785 0-5.188-1.639-6.315-4H17v-2h-6.92c-.047-.328-.08-.66-.08-1s.033-.672.08-1H17V9h-6.315c1.127-2.36 3.53-4 6.315-4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
