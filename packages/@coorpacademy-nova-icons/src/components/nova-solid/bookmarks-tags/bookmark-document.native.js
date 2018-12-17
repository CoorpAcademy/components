import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 3h-7V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4c-1.103 0-2 .897-2 2v15c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V5c0-1.103-.896-2-2-2zM7 3h4v8.586l-1.293-1.293a.997.997 0 0 0-1.414 0L7 11.586V3zm11 15H6v-2h12v2zm0-5h-4v-2h4v2zm0-4h-4V7h4v2z"
    />
  </Svg>
);

export default SvgComponent;
