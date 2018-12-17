import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11.042 22c-4.962 0-9-4.037-9-9s4.038-9 9-9v2c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7h2c0 4.963-4.038 9-9 9z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M12.134 16.86l-4.976-4.976 1.767-1.768 3.024 3.024 8.125-9.932 1.935 1.584z"
    />
  </Svg>
);

export default SvgComponent;
