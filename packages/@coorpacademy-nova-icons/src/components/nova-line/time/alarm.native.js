import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.555 19c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89zM21 18H3v-2.721l.684-.227A3.385 3.385 0 0 0 6 11.838V9c0-3.309 2.691-6 6-6s6 2.691 6 6v2.838c0 1.46.931 2.751 2.316 3.214l.684.227V18zM6.035 16h11.931A5.376 5.376 0 0 1 16 11.838V9c0-2.206-1.794-4-4-4S8 6.794 8 9v2.838c0 1.648-.745 3.16-1.965 4.162z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
