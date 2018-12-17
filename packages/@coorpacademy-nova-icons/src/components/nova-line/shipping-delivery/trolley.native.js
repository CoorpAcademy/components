import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 4V2h-3a1 1 0 0 0-1 1v11c-2.205 0-4 1.794-4 4H7a.996.996 0 0 0-.707.293l-2 2 1.414 1.414L7.414 20h5.143c.693 1.19 1.97 2 3.443 2 2.205 0 4-1.794 4-4 0-1.474-.811-2.75-2-3.443V4h2zm-4 16c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2a2 2 0 0 1-2 2z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
