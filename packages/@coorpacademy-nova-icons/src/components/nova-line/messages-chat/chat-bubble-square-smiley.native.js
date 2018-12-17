import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M5.998 22v-4h-2c-1.104 0-2-.897-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 1.103-.896 2-2 2h-8.666l-5.334 4zm-2-18v12h4v2l2.666-2h9.334V4h-16z"
      fill="currentColor"
    />
    <Path
      d="M7.42 11c.772 1.764 2.528 3 4.578 3s3.806-1.236 4.578-3H7.42z"
      fill="currentColor"
    />
    <Circle cx={8.998} cy={7.25} r={1.25} fill="currentColor" />
    <Circle cx={14.998} cy={7.25} r={1.25} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
