import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M12 22.001c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <Circle cx={8} cy={13.001} r={2} fill="currentColor" />
    <Circle cx={16} cy={13.001} r={2} fill="currentColor" />
    <Circle cx={12} cy={16.001} r={2} fill="currentColor" />
    <Path fill="currentColor" d="M11 6.001h2v5h-2z" />
  </Svg>
);

export default SvgComponent;
