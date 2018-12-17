import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M16 6H8c-4.746 0-6 5.233-6 8 0 .404.244.768.616.922.656.274.929-.09 1.384-.48V16c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-1.558c.443.38.741.748 1.384.48A.998.998 0 0 0 22 14c0-2.767-1.254-8-6-8zm.24 2h1.92l-2.4 3h-1.92l2.4-3zm-2.08 0l-2.4 3H9.84l2.4-3h1.92zM8.24 8h1.92l-2.4 3H5.84l2.4-3zM18 16c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1v-2.796A2.898 2.898 0 0 1 7 13h10c.325 0 .666.079 1 .204V16z"
    />
  </Svg>
);

export default SvgComponent;
