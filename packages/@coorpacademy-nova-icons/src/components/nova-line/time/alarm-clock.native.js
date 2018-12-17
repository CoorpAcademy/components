import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 22c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zM21.141 8.098a3 3 0 0 0-4.24-4.238l4.24 4.238zM2.859 8.098a3 3 0 0 1 4.24-4.238l-4.24 4.238z"
      fill="currentColor"
    />
    <Path
      d="M14.293 16.707l-3-3A1 1 0 0 1 11 13V8h2v4.586l2.707 2.707-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
