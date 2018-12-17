import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M14.293 10.292L13 9v4h4l-1.293-1.293 2-2-1.414-1.415zM17 15h-4v4l1.293-1.293 2 2 1.414-1.415-2-2zM7.707 8.292L6.293 9.707l2 2L7 13h4V9l-1.293 1.292zM8.293 16.292l-2 2 1.414 1.415 2-2L11 19v-4H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
