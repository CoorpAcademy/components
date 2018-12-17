import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.587 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V13.74a8.003 8.003 0 0 1-5.413-4.738zm1.413 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306z" />
      <Path d="M24 4.289h-4.286L18 .002l-1.715 4.287H12l3.708 3.129-1.994 4.584L18 9.168l4.285 2.834-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
