import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.415 18.586l-4.527-4.527A7.94 7.94 0 0 0 18.001 10a7.939 7.939 0 0 0-2.344-5.656C14.146 2.832 12.138 2 10.001 2s-4.145.832-5.656 2.344C2.833 5.853 2.001 7.863 2.001 10s.832 4.146 2.344 5.656A7.942 7.942 0 0 0 10.001 18a7.95 7.95 0 0 0 4.059-1.113l4.527 4.527c.378.378.88.586 1.414.586a2.001 2.001 0 0 0 1.414-3.414zM9.95 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 9.95 6zm-3 8c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
    />
  </Svg>
);

export default SvgComponent;
