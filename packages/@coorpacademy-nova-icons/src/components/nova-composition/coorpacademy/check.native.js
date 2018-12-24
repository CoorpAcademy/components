import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 13 13" {...props}>
    <Path
      fill="currentColor"
      d="M11.728 2.123a.397.397 0 0 0-.575 0L5.097 8.308a.396.396 0 0 1-.575 0L1.868 5.536a.394.394 0 0 0-.575 0L.12 6.617A.423.423 0 0 0 0 6.91c0 .107.042.22.12.302l2.677 2.881c.158.165.417.431.575.595l1.15 1.19a.4.4 0 0 0 .576 0l7.781-7.97a.432.432 0 0 0 0-.596l-1.15-1.189z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
