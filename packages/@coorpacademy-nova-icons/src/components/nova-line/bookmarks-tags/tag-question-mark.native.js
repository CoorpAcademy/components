import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.996.996 0 0 0 20 8zm-2-.414l-10 10L2.414 12l10-10H18v5.586z"
      fill="currentColor"
    />
    <Circle cx={15} cy={5} r={2} fill="currentColor" />
    <Path
      d="M21 21h-2v-3h1a2 2 0 1 0-2-2h-2c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.874V21z"
      fill="currentColor"
    />
    <Circle cx={20} cy={23} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
