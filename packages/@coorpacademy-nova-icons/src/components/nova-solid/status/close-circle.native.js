import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12.042 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.478-10-10-10zm4.707 13.293l-1.414 1.414-3.293-3.292-3.293 3.292-1.414-1.414L10.627 12 7.334 8.707l1.414-1.413 3.293 3.293 3.293-3.293 1.414 1.413L13.456 12l3.293 3.293z"
    />
  </Svg>
);

export default SvgComponent;
