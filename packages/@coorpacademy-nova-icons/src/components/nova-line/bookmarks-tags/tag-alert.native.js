import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8 20a.997.997 0 0 1-.707-.293l-7-7a.999.999 0 0 1 0-1.414l11-11A.996.996 0 0 1 12 0h7a1 1 0 0 1 1 1v7c0 .266-.105.52-.293.707l-11 11A.997.997 0 0 1 8 20zm-5.586-8L8 17.586l10-10V2h-5.586l-10 10z"
      fill="currentColor"
    />
    <Circle cx={15} cy={5} r={2} fill="currentColor" />
    <Path fill="currentColor" d="M20 14h2v6h-2z" />
    <Circle cx={21} cy={22} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
