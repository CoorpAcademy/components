import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.522 2 12 2zM8 17.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM9.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm6.5 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
    />
  </Svg>
);

export default SvgComponent;
