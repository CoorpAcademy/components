import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M17.414 5c-.754-.754-2.074-.754-2.828 0L5 14.586a2.001 2.001 0 0 0 0 2.828L6.586 19a2 2 0 0 0 2.828 0L19 9.414c.377-.377.584-.879.584-1.414S19.377 6.963 19 6.586L17.414 5zM18.293 4.293l2-2 1.413 1.414-2 2zM3.708 21.707l-1.414-1.413 2-2 1.413 1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
