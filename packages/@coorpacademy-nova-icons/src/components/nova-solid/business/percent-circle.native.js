import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zM9 7a2 2 0 1 1-.001 4.001A2 2 0 0 1 9 7zm-.293 9.706l-1.414-1.413 8-8 1.414 1.413-8 8zM15 17a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 17z"
    />
  </Svg>
);

export default SvgComponent;
