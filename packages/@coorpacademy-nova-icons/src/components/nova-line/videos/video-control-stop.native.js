import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M19 3H5c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.104-.897-2-2-2zM5 19V5h14l.001 14H5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
