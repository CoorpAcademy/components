import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M12 2L4 12l8 10 8-10-8-10zm-2 10H6l6-8-2 8h4l-2 8-2-8z"
    />
  </Svg>
);

export default SvgComponent;
