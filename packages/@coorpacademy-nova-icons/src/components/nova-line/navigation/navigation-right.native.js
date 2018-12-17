import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M9 20.416l-1.414-1.415 7-7-7-7L9 3.587l8.414 8.414z"
    />
    <Path
      fill="currentColor"
      d="M4 20.416l-1.414-1.415 7-7-7-7L4 3.587l8.414 8.414zM14 20.416l-1.414-1.415 7-7-7-7L14 3.587l8.414 8.414z"
    />
  </Svg>
);

export default SvgComponent;
