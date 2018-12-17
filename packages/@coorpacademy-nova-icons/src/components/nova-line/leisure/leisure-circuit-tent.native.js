import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      d="M21.708 21.293C20.466 20.052 20.002 15.547 20 13a.999.999 0 0 0-.35-.759L13 6.54V5h2V3h-4v3.54l-6.65 5.701A.999.999 0 0 0 4 13c-.002 2.547-.466 7.052-1.707 8.293A1.002 1.002 0 0 0 3 23h18a1 1 0 0 0 .708-1.707zM16.297 12H7.704L12 8.316 16.297 12zM9.87 21L12 17.803 14.131 21H9.87zm6.666 0l-3.703-5.555c-.371-.556-1.293-.556-1.664 0L7.465 21H4.767c.915-2.213 1.151-5.369 1.212-7h12.043c.061 1.631.297 4.787 1.212 7h-2.698z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
