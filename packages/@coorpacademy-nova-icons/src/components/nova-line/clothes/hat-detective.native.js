import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <Path
      d="M20 13c0 1.053-.305 1.632-1.029 1.869C18.835 11.976 18.086 5 14 5c-.768 0-1.469.29-2 .766A2.987 2.987 0 0 0 10 5c-4.102 0-4.842 7.031-4.973 9.903C4.252 14.703 4 14.16 4 13H2c0 2.654 1.346 4 4 4h12c2.542 0 4-1.458 4-4h-2zM7.023 15C7.18 11.461 8.139 7 10 7c.551 0 1 .449 1 1s-.449 1-1 1v2c1.654 0 3-1.346 3-3 0-.551.449-1 1-1 1.861 0 2.82 4.461 2.977 8H7.023z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
