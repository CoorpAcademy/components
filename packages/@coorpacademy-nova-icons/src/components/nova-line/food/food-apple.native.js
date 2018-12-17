import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M15.371 6.367c-.799 0-1.598.229-2.371.645V5c0-1.654-1.346-3-3-3H8v2h2c.551 0 1 .449 1 1v2.012c-.773-.416-1.572-.645-2.371-.645C5.312 6.367 3 9.863 3 13c0 4.542 3.467 9 7 9 .262 0 .518-.106.704-.29.291-.286.904-.71 1.296-.71.391 0 1.004.423 1.295.709A.997.997 0 0 0 14 22c3.533 0 7-4.458 7-9 0-3.137-2.312-6.633-5.629-6.633zm-1.023 13.608C13.869 19.588 12.979 19 12 19s-1.869.588-2.348.975C7.369 19.646 5 16.175 5 13c0-2.142 1.585-4.633 3.629-4.633.879 0 1.775.451 2.664 1.339a.999.999 0 0 0 1.414 0c.889-.888 1.785-1.339 2.664-1.339C17.415 8.367 19 10.858 19 13c0 3.175-2.369 6.646-4.652 6.975z" />
      <Path d="M18 2s-2 0-3 1-1 3-1 3 2 0 3-1 1-3 1-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
