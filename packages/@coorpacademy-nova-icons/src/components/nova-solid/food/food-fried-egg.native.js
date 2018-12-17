import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <Path
      fill="currentColor"
      d="M19.521 7.201C17.76 4.6 14.934 2.852 12.488 2.852c-1.33 0-2.529.499-3.472 1.441-1.413 1.413-2.663 2.026-3.667 2.519-2.015.99-3.196 1.844-2.611 5.352C3.818 18.646 9.301 21 12.724 21c5.725 0 5.952-2.693 7.929-7.629.718-1.798.306-4.047-1.132-6.17zM11.724 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
    />
  </Svg>
);

export default SvgComponent;
