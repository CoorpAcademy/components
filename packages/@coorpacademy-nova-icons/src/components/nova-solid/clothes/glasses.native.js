import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24.001v24.002H.002z" />
    <Path
      fill="currentColor"
      d="M20.394 6.293C20.136 6.035 19.351 5.25 12 5.25s-8.136.785-8.394 1.043c-1.613 1.614-2.111 5.428-1.044 8.004C3.284 16.04 4.617 17 6.313 17H9c1.049 0 1.51-.978 1.846-1.691C11.301 14.343 11.544 14 12 14s.699.343 1.154 1.309C13.49 16.022 13.951 17 15 17h2.687c1.696 0 3.029-.96 3.751-2.703 1.067-2.576.569-6.39-1.044-8.004zM18 11c0-.449-.551-1-1-1h-1V8h1c1.542 0 3 1.458 3 3h-2z"
    />
  </Svg>
);

export default SvgComponent;
