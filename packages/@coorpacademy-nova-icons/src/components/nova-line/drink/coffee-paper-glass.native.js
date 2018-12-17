import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 5h-.279l-.771-2.316A1.001 1.001 0 0 0 16 2H8a1 1 0 0 0-.949.683L6.279 5H6a1 1 0 0 0-1 1v4c0 .527.383 1 1.086 1l.918 10.09A1 1 0 0 0 8 22h8a1 1 0 0 0 .996-.909L17.914 11c.703 0 1.086-.474 1.086-1V6a1 1 0 0 0-1-1zM7 7h10v2H7V7zm1.721-3h6.559l.334 1H8.387l.334-1zm.192 16l-.182-2h6.537l-.182 2H8.913zm6.81-7H8.277l-.182-2h7.809l-.181 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
