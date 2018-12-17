import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M5 3.259v17.482L19.985 12 5 3.259zm2 3.482L16.015 12 7 17.259V6.741z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
