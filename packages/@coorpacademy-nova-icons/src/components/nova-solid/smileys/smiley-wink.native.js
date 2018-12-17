import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zM9 7a2 2 0 1 1-.001 4.001A2 2 0 0 1 9 7zm3 12a7.594 7.594 0 0 1-6-2.957l1.559-1.557A5.418 5.418 0 0 0 12 16.831a5.407 5.407 0 0 0 4.443-2.35L18 16.04A7.58 7.58 0 0 1 12 19zm6-9h-4V8h4v2z"
    />
  </Svg>
);

export default SvgComponent;
