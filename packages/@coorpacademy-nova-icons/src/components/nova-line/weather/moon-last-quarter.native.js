import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M13 2C7.486 2 3 6.486 3 12c0 5.515 4.486 10 10 10h1V2h-1zm-1 17.938C8.059 19.444 5 16.073 5 12c0-4.072 3.059-7.443 7-7.938v15.876z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
