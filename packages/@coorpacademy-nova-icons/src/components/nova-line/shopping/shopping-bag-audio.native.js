import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 7h4v2h-4z" />
      <Path d="M20.998 7.929A1.001 1.001 0 0 0 20 7h-2v2h1.068l.857 12H4.074l.858-12H6V7H4c-.524 0-.96.405-.998.929l-1 14A1 1 0 0 0 3 23h18a1.001 1.001 0 0 0 .998-1.071l-1-14z" />
      <Path d="M9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v3h2V6c0-2.757-2.243-5-5-5S7 3.243 7 6v3h2V6zM8 17.5a2.5 2.5 0 0 0 5 0v-4.112l2.633.877.633-1.898L11 10.612v4.438a2.5 2.5 0 0 0-3 2.45z" />
    </G>
  </Svg>
);

export default SvgComponent;
