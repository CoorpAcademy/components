import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M9.001 19c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
      fill="currentColor"
    />
    <Circle cx={12.001} cy={13} r={2} fill="currentColor" />
    <Path
      d="M18.001 22h-12a1 1 0 0 1-1-1v-7h-1a1.994 1.994 0 0 1-1.847-1.234 1.995 1.995 0 0 1 .433-2.18l8.001-7.981a1.986 1.986 0 0 1 1.413-.585c.534 0 1.036.208 1.414.586l7.999 7.979c.574.574.745 1.43.435 2.179A1.991 1.991 0 0 1 20.001 14h-1v7c0 .551-.448 1-1 1zm-11-2h10v-7a1 1 0 0 1 1-1h2l-7.999-7.98L4 12h2.001a1 1 0 0 1 1 1v7z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
