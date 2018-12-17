import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13.001 3v2h4.586l-5.115 5.115A5.961 5.961 0 0 0 9.001 9c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-1.294-.416-2.49-1.115-3.471l5.115-5.115V11h2V3h-8zm-4 16c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4 2.205 0 4 1.795 4 4 0 2.206-1.794 4-4 4z"
    />
  </Svg>
);

export default SvgComponent;
