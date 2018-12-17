import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17 5.003v-2c-3.909 0-7.235 2.51-8.475 6H6v2h2.059a9.179 9.179 0 0 0-.059 1c0 .338.023.671.059 1H6v2h2.525c1.239 3.491 4.565 6 8.475 6v-2c-2.785 0-5.189-1.638-6.315-4H17v-2h-6.92a7.026 7.026 0 0 1-.08-1c0-.34.033-.672.08-1H17v-2h-6.315c1.126-2.361 3.53-4 6.315-4z"
    />
  </Svg>
);

export default SvgComponent;
