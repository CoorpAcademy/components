import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm2 5h2v4h-2V7zM8 7h2v4H8V7zm7 10l-1-1.5-1 1.5h-2l-1-1.5L9 17H7l2-3h2l1 1.5 1-1.5h2l2 3h-2z"
    />
  </Svg>
);

export default SvgComponent;
