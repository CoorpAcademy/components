import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zM8.048 7.796C8.71 5.453 11 6.227 11 8.012 11 11 8.253 11.852 8 12c0 0-3-1-3-3.988 0-1.785 2.386-2.559 3.048-.216zM12 19a7.594 7.594 0 0 1-6-2.957l1.559-1.557A5.418 5.418 0 0 0 12 16.831a5.407 5.407 0 0 0 4.443-2.35L18 16.04A7.58 7.58 0 0 1 12 19zm4-7s-3-1-3-3.988c0-1.786 2.386-2.559 3.048-.216C16.71 5.453 19 6.227 19 8.012 19 11 16.253 11.852 16 12z"
    />
  </Svg>
);

export default SvgComponent;
