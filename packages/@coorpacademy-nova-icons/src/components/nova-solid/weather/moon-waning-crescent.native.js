import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M10 12.002c0-4.1 2.47-7.619 6-9.162a9.94 9.94 0 0 0-4-.838c-5.523 0-10 4.476-10 10s4.477 10 10 10a9.957 9.957 0 0 0 4-.838c-3.53-1.543-6-5.062-6-9.162z"
    />
  </Svg>
);

export default SvgComponent;
