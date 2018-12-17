import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm0 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-3.75 9c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z"
    />
  </Svg>
);

export default SvgComponent;
