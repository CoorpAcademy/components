import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M20 2H4c-1.104 0-2 .898-2 2v16c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <Path d="M5 17h14v2H5zM7 9.415V16h2V9.415l1.293 1.293 1.414-1.414L8 5.586 4.293 9.294l1.414 1.414zM15 9.415V16h2V9.415l1.293 1.293 1.414-1.414L16 5.586l-3.707 3.708 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
