import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.998 3c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.998 21h11c5.514 0 10-4.037 10-9s-4.486-9-10-9zm-3 13h-2v-3h2v3zm4 0h-2v-5h2v5zm4 0h-2V9h2v7z"
    />
  </Svg>
);

export default SvgComponent;
