import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.525 2.15a1.003 1.003 0 0 0-.973-.046l-3.48 1.743-2.518-1.679a1.003 1.003 0 0 0-1.109 0L8.928 3.847l-3.48-1.743A1.003 1.003 0 0 0 4 3v18a1.003 1.003 0 0 0 1 1 .992.992 0 0 0 .447-.106l3.48-1.74 2.518 1.678a1 1 0 0 0 1.109 0l2.517-1.678 3.481 1.74A1 1 0 0 0 20 21V3a.998.998 0 0 0-.475-.85zM15 10h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.217-2 2.45V17h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 10.5c0-1.208.86-2.217 2-2.449V6.999h2v1h2V10z"
    />
  </Svg>
);

export default SvgComponent;
