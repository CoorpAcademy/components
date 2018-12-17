import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.251 16c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z"
      fill="currentColor"
    />
    <Circle cx={12.001} cy={8.5} r={2.5} fill="currentColor" />
    <Path
      d="M12.001 23c-9.886 0-10-16.306-10-17 0-.363.197-.697.514-.874l9-5a1 1 0 0 1 .972 0l9 5c.317.176.514.51.514.874 0 .694-.114 17-10 17zM4.017 6.58C4.126 9.341 5.004 21 12.001 21s7.875-11.658 7.984-14.42l-7.984-4.437L4.017 6.58z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
