import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M15 9V2H2v13h7v7h13V9h-7zM4 13V4h9l.001 5H9v4H4zm16.001 7H11v-5h4v-4h5l.001 9z"
    />
  </Svg>
);

export default SvgComponent;
