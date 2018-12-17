import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 15.005l-3 4h2v3l3-4H8z" />
      <Path d="M6.07 15.911L9 12.005v4h5l3-4v3.705c2.888-.862 5-3.54 5-6.705 0-3.86-3.14-7-7-7a6.964 6.964 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.647l-.817.575C9.678 6.459 8.393 6.005 7 6.005c-2.757 0-5 2.243-5 5a5.003 5.003 0 0 0 4.07 4.906z" />
      <Path d="M16 15.005l-3 4h2v3l3-4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
