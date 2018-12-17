import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16c-.516 0-1.016-.06-1.5-.165A7 7 0 0 0 16 12a7 7 0 0 0-5.5-6.835A7 7 0 1 1 12 19z"
    />
  </Svg>
);

export default SvgComponent;
