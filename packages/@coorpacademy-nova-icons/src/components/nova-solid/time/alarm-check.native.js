import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M5.555 22c.693 1.19 1.968 2 3.445 2s2.752-.81 3.445-2h-6.89zM15 17v-3.155a5.997 5.997 0 0 1-4.67-7.692A6.026 6.026 0 0 0 9 6a6 6 0 0 0-6 6v5c0 1.656-1.344 3-3 3v1h18v-1c-1.656 0-3-1.344-3-3zM15 11.414l-3.707-3.707 1.414-1.414L15 8.586l4.293-4.293 1.414 1.414z"
    />
  </Svg>
);

export default SvgComponent;
