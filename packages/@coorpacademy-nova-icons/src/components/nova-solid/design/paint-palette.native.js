import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.465 0 .922-.031 1.37-.093a2 2 0 0 0 1.141-3.396l-1.097-1.098a2.001 2.001 0 0 1-.434-2.18A2.001 2.001 0 0 1 14.828 14H20a2 2 0 0 0 2-2c0-5.523-4.478-10-10-10zM7 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 12zm5-4a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 8zm5 4a2 2 0 1 1 .001-4.001A2 2 0 0 1 17 12z"
    />
  </Svg>
);

export default SvgComponent;
