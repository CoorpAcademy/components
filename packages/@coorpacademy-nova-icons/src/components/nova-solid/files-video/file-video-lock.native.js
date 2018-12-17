import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.744 12.875A6.993 6.993 0 0 1 18 9.08V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-6c0-.991.209-1.933.581-2.788L5 17V9l7.744 3.875zM12 1l5 5h-5V1z" />
      <Path d="M23 15.002c0-2.207-1.794-4-4-4s-4 1.793-4 4c-.553 0-1 .446-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7c0-.554-.447-1-1-1zm-4-2c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={18.996} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
