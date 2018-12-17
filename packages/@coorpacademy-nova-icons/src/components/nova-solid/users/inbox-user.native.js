import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path fill="currentColor" d="M20.001 13h-2V4h-12v9h-2V2h16z" />
    <Path
      fill="currentColor"
      d="M9.001 13c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
    />
    <Circle fill="currentColor" cx={12.001} cy={6.999} r={2} />
    <Path
      fill="currentColor"
      d="M15.859 15a3.99 3.99 0 0 1-3.858 3 3.99 3.99 0 0 1-3.858-3H2.001v7h20v-7h-6.142z"
    />
  </Svg>
);

export default SvgComponent;
