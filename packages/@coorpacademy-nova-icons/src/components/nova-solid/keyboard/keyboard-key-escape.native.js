import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM6 6h5L9.207 7.793l3.5 3.5-1.414 1.413-3.5-3.5L6 11V6zm6 12c-3.309 0-6-2.691-6-6h2c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4V6c3.309 0 6 2.691 6 6s-2.691 6-6 6z"
    />
  </Svg>
);

export default SvgComponent;
