import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M19.414 6.121l-3.535-3.535a2 2 0 0 0-2.828 0L9.515 6.121a2.002 2.002 0 0 0 0 2.83l3.536 3.536c.78.78 2.047.78 2.828 0l3.535-3.536a2.002 2.002 0 0 0 0-2.83zM6.929 14.365l.707.706 3.536-2.12-2.121-2.122zM5 20a2 2 0 0 0 4 0c0-1.104-2-4-2-4s-2 2.896-2 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
