import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <Path
      fill="currentColor"
      d="M20.707 4.293l-2-2A1.002 1.002 0 0 0 18 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a.997.997 0 0 0-.293-.707zM15 16h-2v-3h-2v3H9v-5H7l5-4 5 4h-2v5zm2-10V3l3 3h-3z"
    />
  </Svg>
);

export default SvgComponent;
