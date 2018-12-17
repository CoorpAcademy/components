import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M22 9V7a1 1 0 0 0-.594-.914l-9-4a1.001 1.001 0 0 0-.813 0l-9 4C2.233 6.246 2 6.606 2 7v2a1 1 0 0 0 1 1h8v10H2v2h20v-2h-9V10h8a1 1 0 0 0 1-1zM4 7.65l5.256-2.336L7.465 8H4v-.35zM9.87 8L12 4.803 14.131 8H9.87zM20 8h-3.465l-1.791-2.686L20 7.65V8z" />
      <Path d="M16 14a1 1 0 0 0-1 1v1c0 1.795 1.205 3 3 3h.002C19.795 19 21 17.794 21 16v-1a1 1 0 0 0-1-1h-4zm2 3c-.248 0-1 0-1-1h2c0 .896-.57 1-1 1zM6.002 19C7.908 19 9 17.907 9 16v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1c0 1.907 1.094 3 3 3h.002zM5 16h2c0 .794-.205 1-1 1-.794 0-1-.205-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
