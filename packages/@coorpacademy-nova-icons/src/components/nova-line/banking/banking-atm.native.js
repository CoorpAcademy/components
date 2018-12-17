import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 10h10v6H7zM7 17h6v2H7zM8.111 3.333a.78.78 0 0 0-.777-.778c-.43 0-.778.35-.778.778v.777h1.556v-.777z" />
      <Path d="M20 0H4c-.55 0-1 .449-1 1v22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V1c0-.551-.45-1-1-1zM9.667 1h4.667v.776c0-.429.348-.776.777-.776.443 0 .259.036 1.556 1.918C17.964 1.035 17.779 1 18.223 1c.429 0 .777.347.777.776v5.445h-1.556V4.135l-.228.341a.658.658 0 0 1-1.1 0l-.226-.341v3.086h-1.556V2.555h-1.557v4.667h-1.555V2.555H9.667V1zM5 3.333A2.336 2.336 0 0 1 7.334 1a2.336 2.336 0 0 1 2.333 2.333v3.889H8.111V5.666H6.556v1.556H5V3.333zM5 22V9h14v13H5z" />
      <Circle cx={16} cy={17.999} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
