import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-13.5 4.75H5.876a.875.875 0 0 0-.875.875v1.75c0 .483.392.875.875.875h2.625V16H5.876a2.628 2.628 0 0 1-2.625-2.625v-1.75A2.628 2.628 0 0 1 5.876 9h2.625v1.75zm6.125 2.625h-1.75v1.75h-1.75v-1.75h-1.75v-1.75h1.75v-1.75h1.75v1.75h1.75v1.75zm6.125 0h-1.75v1.75h-1.75v-1.75h-1.75v-1.75h1.75v-1.75h1.75v1.75h1.75v1.75z"
    />
  </Svg>
);

export default SvgComponent;
