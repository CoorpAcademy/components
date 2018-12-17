import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M22.134 6.305l-1.581 2.737C19.289 4.969 15.485 2 11 2 5.486 2 1 6.486 1 12c0 5.515 4.486 10 10 10v-2c-4.411 0-8-3.589-8-8s3.589-8 8-8c3.769 0 6.929 2.623 7.772 6.136l-3.468-2.002-1 1.733 6.063 3.5 3.5-6.062-1.733-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
