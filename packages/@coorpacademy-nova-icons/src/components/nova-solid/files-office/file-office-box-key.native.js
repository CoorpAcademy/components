import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.25 16H6.113L4.75 14.058V16H3V9h1.75v1.942L6.113 9H8.25l-2.456 3.5L8.25 16zm6-5.25h-3.5v.875h2.625v1.75H10.75v.875h3.5V16H9.875A.875.875 0 0 1 9 15.125v-5.25C9 9.392 9.392 9 9.875 9h4.375v1.75zm5.013 2.593V16h-1.75v-2.625H17.5L15.75 9h1.75l.875 2.188L19.25 9H21l-1.737 4.343z"
    />
  </Svg>
);

export default SvgComponent;
