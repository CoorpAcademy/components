import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <Path
      d="M17.537 6.242L15.754.003H8.246L6.463 6.242a7.97 7.97 0 0 0 0 11.522l1.783 6.239h7.509l1.783-6.239a7.97 7.97 0 0 0-.001-11.522zM9.754 2.003h4.491l.738 2.583a7.936 7.936 0 0 0-5.967 0l.738-2.583zm4.492 20H9.754l-.738-2.583a7.945 7.945 0 0 0 5.968 0l-.738 2.583zm-2.247-4.002a6 6 0 0 1 0-12 6 6 0 0 1 0 12z"
      fill="currentColor"
    />
    <Circle cx={9} cy={10.001} r={1} fill="currentColor" />
    <Path
      d="M16 15.334h-2.5a2.503 2.503 0 0 1-2.5-2.5v-1.667c0-1.378 1.122-2.5 2.5-2.5H16v1.667h-2.5a.834.834 0 0 0-.833.833v1.667c0 .46.374.833.833.833H16v1.667z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
