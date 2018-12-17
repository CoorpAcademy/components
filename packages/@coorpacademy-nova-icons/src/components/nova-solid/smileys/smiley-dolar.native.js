import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zM9 16H7v-1H5v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 5 9.5c0-1.207.86-2.217 2-2.449V6h2v1h2v2H7.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449V16zm5 3h-4v-2h4v2zm5-10h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449V16h-2v-1h-2v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 13 9.5c0-1.207.86-2.217 2-2.449V6h2v1h2v2z"
    />
  </Svg>
);

export default SvgComponent;
