import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <Path
      fill="currentColor"
      d="M21.555 16.168L19 14.465V10c0-3.859-3.141-7-7-7s-7 3.141-7 7v4.465l-2.555 1.703a1.001 1.001 0 0 0-.152 1.539C2.428 17.842 5.658 21 12 21s9.572-3.158 9.707-3.294a.999.999 0 0 0-.152-1.538zM18 14H6v-1h12v1z"
    />
  </Svg>
);

export default SvgComponent;
