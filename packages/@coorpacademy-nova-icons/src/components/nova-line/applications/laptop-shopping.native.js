import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.243 16.029c-.082-.021-.162-.011-.243-.011V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v13.019c-.081 0-.161-.009-.243.011a1.001 1.001 0 0 0-.728 1.213l.757 3.029C1.033 21.257 1.984 22 3 22h18c1.016 0 1.967-.743 2.213-1.728l.757-3.029a1.001 1.001 0 0 0-.727-1.214zM3 4h18v12h-6a.997.997 0 0 0-.707.293l-.707.707h-3.172l-.707-.707A.997.997 0 0 0 9 16H3V4zm18 16H3c-.09 0-.25-.125-.272-.213L2.281 18h6.305l.707.707c.187.187.442.293.707.293h4c.265 0 .52-.106.707-.293l.707-.707h6.305l-.447 1.788c-.022.087-.182.212-.272.212z" />
      <Path d="M9 12h7V7h-5V6a1 1 0 0 0-1-1H8v2h1v5z" />
      <Circle cx={10} cy={14} r={1} />
      <Circle cx={15} cy={14} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
