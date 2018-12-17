import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.546 11.005L16.73 5.068l1.551-1.939-1.562-1.248-1.7 2.124H7.981l-1.7-2.124-1.562 1.248L6.27 5.068l-3.816 5.937H0v2h2.454l3.816 5.937-1.551 1.939 1.562 1.248 1.7-2.124h7.039l1.7 2.124 1.562-1.248-1.551-1.939 3.816-5.937H23v-2h-2.454zm-10.546 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </Svg>
);

export default SvgComponent;
