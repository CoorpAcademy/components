import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17.934 6.642a1 1 0 0 0-.934-.64h-4.694L9.907.83a1 1 0 0 0-1.814 0L5.694 6.002H1a1 1 0 0 0-.672 1.741l3.984 3.609-1.607 5.625a1 1 0 0 0 1.517 1.106L9 14.898l4.778 3.185a1.003 1.003 0 0 0 1.145-.024 1 1 0 0 0 .372-1.082l-1.607-5.625 3.984-3.609c.307-.279.41-.715.262-1.101zM16 19.001h8v2h-8z"
    />
  </Svg>
);

export default SvgComponent;
