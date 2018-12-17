import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 .751L3 17.894v.222c0 2.952 4.31 4 8 4s8-1.048 8-4v-.222L11 .751zm0 19.364c-3.379 0-5.715-.916-5.976-1.83L11 5.48l5.976 12.805c-.261.914-2.597 1.83-5.976 1.83z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
