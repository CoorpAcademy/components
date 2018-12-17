import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.707 7.293l-1.414 1.414L17.586 11H2v2h15.586l-2.293 2.293 1.414 1.413L21.414 12z"
    />
  </Svg>
);

export default SvgComponent;
