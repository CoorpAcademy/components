import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 4h3v2h-3zM11.365 9.95L9.95 11.366 7.828 9.243l1.415-1.414zM4 10h2v3H4zM22.929 19.629l-2-5A1.002 1.002 0 0 0 20 14H8c-.409 0-.776.249-.929.629l-2 5A1.001 1.001 0 0 0 6 21h7v3h2v-3h7a.999.999 0 0 0 .929-1.371zM8.677 16h2.103l-.6 3H7.477l1.2-3zm3.543 3l.6-3h2.36l.6 3h-3.56zm5.6 0l-.6-3h2.103l1.2 3H17.82zM8 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1c2.757 0 5-2.243 5-5zM4 5.828V4h1.829A3.011 3.011 0 0 1 4 5.828z" />
    </G>
  </Svg>
);

export default SvgComponent;
