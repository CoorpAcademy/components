import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16 3V1h-2v2H8c-1.103 0-2 .897-2 2v15c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V5c0-1.103-.897-2-2-2zm-6 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-5H8V5h8v4z"
    />
  </Svg>
);

export default SvgComponent;
