import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.447 3.619C19.474 2.6 15.737 2 12 2c-3.737 0-7.474.6-8.447 1.619a2.006 2.006 0 0 0-.551 1.475l.648 11.829A5.345 5.345 0 0 0 8.988 22h6.024a5.344 5.344 0 0 0 5.338-5.077l.648-11.829a2.006 2.006 0 0 0-.551-1.475zM9 4h6v2H9V4zm3 15a5.314 5.314 0 0 1-3.831-1.644l.941-.762A2 2 0 0 0 10 14.93V14a2 2 0 0 0-2-2H6.413l-.232-1.835A1.997 1.997 0 0 1 8.173 8h7.654a1.996 1.996 0 0 1 1.992 2.166L17.587 12H16a2 2 0 0 0-2 2v.93c0 .669.334 1.293.891 1.664l.932.773A5.32 5.32 0 0 1 12 19z"
    />
  </Svg>
);

export default SvgComponent;
