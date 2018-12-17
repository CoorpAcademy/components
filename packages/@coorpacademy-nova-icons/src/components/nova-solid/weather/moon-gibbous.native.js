import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12.5 2.127C7.691 2.852 4 6.991 4 12.002c0 5.012 3.691 9.15 8.5 9.875 4.809-.725 8.5-4.863 8.5-9.875 0-5.011-3.691-9.15-8.5-9.875z"
    />
  </Svg>
);

export default SvgComponent;
