import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <Path
      d="M18 14h-2.465L7.832 2.445A1.001 1.001 0 0 0 7 2C4.243 2 2 4.691 2 8v14h2v-8.979C7.113 17.122 11.196 22 13 22h5c2.205 0 4-1.795 4-4s-1.795-4-4-4zm0 6l-4.933.006C11.908 19.707 7.504 14.463 4 9.674V8c0-1.979 1.084-3.627 2.502-3.945l7.666 11.5c.186.278.498.445.832.445h3a2 2 0 0 1 0 4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
