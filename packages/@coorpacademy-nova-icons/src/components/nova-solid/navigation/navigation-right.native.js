import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.707 11.295l-9-9A.999.999 0 0 0 12 3.001v3H2a1 1 0 0 0-1 1v4a1 1 0 0 0 .293.707l6 6a.997.997 0 0 0 .707.293h4v3a1.002 1.002 0 0 0 1.707.707l9-9a.998.998 0 0 0 0-1.413zM9 16.001l-6-6h6v6z"
    />
  </Svg>
);

export default SvgComponent;
