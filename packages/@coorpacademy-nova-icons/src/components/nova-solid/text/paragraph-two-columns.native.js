import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-9 15H6v-2h5v2zm0-4H6v-2h5v2zm0-4H8V7h3v2zm5 8h-3v-2h3v2zm2-4h-5v-2h5v2zm0-4h-5V7h5v2z"
    />
  </Svg>
);

export default SvgComponent;
