import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 22c-.402 0-.77-.243-.925-.619l-7-17a1 1 0 1 1 1.306-1.306l17 7c.399.165.648.567.617.998a1.002 1.002 0 0 1-.756.898l-7.418 1.854-1.854 7.418A1 1 0 0 1 11 22zM5.838 5.839l4.93 11.97 1.262-5.05c.09-.358.37-.639.729-.728l5.051-1.263L5.838 5.839z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
