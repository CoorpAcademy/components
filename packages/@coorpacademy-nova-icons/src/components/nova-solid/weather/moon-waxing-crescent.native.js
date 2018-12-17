import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.002a9.957 9.957 0 0 0-4 .838c3.53 1.543 6 5.062 6 9.162 0 4.1-2.47 7.619-6 9.162a9.957 9.957 0 0 0 4 .838c5.522 0 10-4.476 10-10s-4.478-10-10-10z"
    />
  </Svg>
);

export default SvgComponent;
