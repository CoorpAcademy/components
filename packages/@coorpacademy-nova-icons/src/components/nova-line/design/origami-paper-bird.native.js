import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M23.924 6.617A1.002 1.002 0 0 0 23 6H12.5L9.8 2.4A1 1 0 0 0 9 2H5c-.304 0-.591.14-.781.375l-4 5c-.24.302-.287.712-.121 1.059C.265 8.779.616 9 1 9h4v4c0 .174.045.345.132.496l4 7A.999.999 0 0 0 10 21h9a1 1 0 0 0 .625-1.78l-4.127-3.303 8.21-8.21c.285-.286.371-.716.216-1.09zm-13.244.29L7 10.586V4h1.5l2.18 2.907zM3.081 7L5 4.602V7H3.081zm13.068 12h-3.735l1.66-1.659L16.149 19zm-5.93-.633l-2.972-5.2L12.414 8h8.172L10.219 18.367z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
