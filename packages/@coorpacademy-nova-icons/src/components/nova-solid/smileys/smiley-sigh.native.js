import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm-2 8H6V8h4v2zm6 8h-3v-4h3v4zm2-8h-4V8h4v2z"
    />
  </Svg>
);

export default SvgComponent;
