import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm4 6a3.99 3.99 0 0 1-3 3.858V14h1v1h-4v-1h1v-2.142A3.99 3.99 0 0 1 8 8V7h8v1z"
    />
  </Svg>
);

export default SvgComponent;
