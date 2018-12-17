import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.707 5.707l-1.414-1.414L6 16.586V13H4v7h7v-2H7.414z"
    />
  </Svg>
);

export default SvgComponent;
