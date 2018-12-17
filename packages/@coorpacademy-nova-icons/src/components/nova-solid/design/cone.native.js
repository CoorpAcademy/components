import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M12 2L4 19c0 1.66 3.58 3 8 3s8-1.34 8-3L12 2zm0 18c-2.38 0-4.52-.39-5.99-1.009C6.74 17.44 12 6 12 6v14z"
    />
  </Svg>
);

export default SvgComponent;
