import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 19c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7a7.002 7.002 0 0 1 6.096 3.57l1.453-1.453C16.943 4.644 14.162 3 11 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 1.678 0 3.244-.47 4.59-1.272l-1.47-1.471A6.935 6.935 0 0 1 11 19z" />
      <Path d="M20 4.5v8.308l-2.288.857A2.652 2.652 0 0 0 16 16.136a2.64 2.64 0 0 0 3.565 2.471l1.786-.67c.39-.147.649-.52.649-.937V4.5h-2zm0 11.808l-1.137.426a.639.639 0 1 1-.448-1.196L20 14.943v1.365z" />
      <Circle cx={11} cy={12} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
