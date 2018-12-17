import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M11.999 10.498a1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5a1.5 1.5 0 0 0-3 0zM19.446 18.104l-2-1a1.005 1.005 0 0 0-.589-.095l-5.858.837v-.848a1 1 0 0 0-1-1h-5v7.014l5.836.973c.197.033.414.007.611-.091l8-4a1.003 1.003 0 0 0 0-1.79zM2.999 14.998h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zM7.141 6.988l5.858-.838v.847a1 1 0 0 0 1 1h5V.984L13.163.011a.992.992 0 0 0-.611.092l-8 4a1 1 0 0 0 0 1.79l2 1c.182.091.386.123.589.095zM22.999-.002h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
