import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.605-.919l-7-3a1.001 1.001 0 0 0-.789 0l-7 3A.999.999 0 0 0 4 6v3a1 1 0 0 0 1 1h1v10H4v2h16v-2h-2V10h1zM9 10h6v2H9v-2z"
    />
  </Svg>
);

export default SvgComponent;
