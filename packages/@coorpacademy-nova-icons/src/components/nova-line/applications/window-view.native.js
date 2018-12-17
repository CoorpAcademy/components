import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M12 9.25c-4.413 0-6.581 4.234-6.671 4.415a.754.754 0 0 0 0 .671c.09.18 2.258 4.415 6.671 4.415s6.581-4.234 6.671-4.415a.754.754 0 0 0 0-.671c-.09-.181-2.258-4.415-6.671-4.415zm0 8c-2.832 0-4.575-2.356-5.134-3.25.559-.892 2.302-3.25 5.134-3.25s4.575 2.358 5.134 3.25c-.559.894-2.302 3.25-5.134 3.25z" />
      <Circle cx={12} cy={14} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
