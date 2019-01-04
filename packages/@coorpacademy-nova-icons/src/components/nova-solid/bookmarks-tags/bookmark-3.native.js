import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M21.707 8.293l-6-6a.999.999 0 0 0-1.414 0l-12 12A1.002 1.002 0 0 0 3 16h5v5a1 1 0 0 0 1.707.707l12-12a.999.999 0 0 0 0-1.414z"
    />
  </Svg>
);

export default SvgComponent;
