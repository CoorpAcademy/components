import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm5.396 7.717l-2.732 1.204-2.191 4.003-1.797.934 1.523-3.954L10 12.919l-4-2.006L7.584 10l2.102.94 2.43-1.082c-.189 0-3.076-1.923-3.235-2.026L10.488 7l3.321 2.104 2.806-1.249a1.01 1.01 0 0 1 .781 1.862z"
    />
  </Svg>
);

export default SvgComponent;
