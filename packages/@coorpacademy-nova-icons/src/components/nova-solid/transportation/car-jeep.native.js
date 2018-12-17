import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M10 17h6v2h-6z" />
      <Circle cx={19.5} cy={18.5} r={2.5} />
      <Circle cx={6.5} cy={18.5} r={2.5} />
      <Path d="M23.64 8.7l-5.362-4.468a.997.997 0 0 0-.64-.232H8a1 1 0 0 0-1 1v3.133a1 1 0 0 1-.858.99l-5.284.754a1 1 0 0 0-.858.99V14a1 1 0 0 0 1 1h.76a4.497 4.497 0 0 1 7.48 0h5.52a4.497 4.497 0 0 1 7.48 0H23a1 1 0 0 0 1-1V9.469c0-.297-.132-.578-.36-.769zM14 10h-4V7h4v3zm6 0h-4V7h2l2 2v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
