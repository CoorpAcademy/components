import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M15.293 15.293L13 17.586V2h-2v15.586l-2.293-2.293-1.414 1.414L12 21.414l4.707-4.707z"
    />
  </Svg>
);

export default SvgComponent;
