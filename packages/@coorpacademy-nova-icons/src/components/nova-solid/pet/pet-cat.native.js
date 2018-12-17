import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M18 2.25h-1v1.5h1A3.254 3.254 0 0 1 21.25 7a3.243 3.243 0 0 1-1.31 2.604 1.996 1.996 0 0 1-1.195.396h-7.917c-.53 0-1.039-.21-1.414-.586L5 5v2c-.289.471-2 3.036-2 3.586C3 11.367 3.633 12 4.414 12 6.37 12 7 13 7 13v5a1 1 0 1 0 2 0 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 1 1 0 1 0 2 0v-5.58c0-.637.303-1.233.815-1.611A4.724 4.724 0 0 0 22.75 7 4.756 4.756 0 0 0 18 2.25z"
    />
  </Svg>
);

export default SvgComponent;
