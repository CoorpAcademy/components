import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11 2.002v20c5.522 0 10-4.476 10-10s-4.478-10-10-10z"
    />
  </Svg>
);

export default SvgComponent;
