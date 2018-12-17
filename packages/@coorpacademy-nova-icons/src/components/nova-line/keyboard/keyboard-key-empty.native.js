import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zm-.003 18H4V4h16l-.003 16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
