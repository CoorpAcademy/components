import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM7.182 16.728l-.364-1.455 4-1 .364 1.455-4 1zm0-3.001l-.364-1.455 4-1 .364 1.455-4 1zm0-3l-.364-1.454 4-1 .364 1.455-4 .999zM15 16h-2V8h2l3 4-3 4z"
    />
  </Svg>
);

export default SvgComponent;
