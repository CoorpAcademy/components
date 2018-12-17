import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11.764 3.152a2.017 2.017 0 0 0-2.178.434L6.479 8H4c-1.103 0-2 .896-2 2v4c0 1.103.897 2 2 2h2.479l2.995 4.28c.417.497.96.72 1.526.72a1.993 1.993 0 0 0 2-2V5c0-.813-.485-1.538-1.236-1.848zM7.521 14H4v-4h3.521L11 5.028l.001 13.947L7.521 14z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
