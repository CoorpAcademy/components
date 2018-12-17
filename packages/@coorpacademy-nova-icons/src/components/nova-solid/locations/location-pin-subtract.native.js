import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M12 2c-4.418 0-8 3.582-8 8s8 12 8 12 8-7.582 8-12-3.582-8-8-8zm4 9H8V9h8v2z"
    />
  </Svg>
);

export default SvgComponent;
