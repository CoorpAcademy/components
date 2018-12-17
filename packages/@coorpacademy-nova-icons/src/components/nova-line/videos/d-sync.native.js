import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.142 7.744C20.475 3.786 16.557 1 12 1 6.272 1 1.558 5.402 1.051 11h2.008c.5-4.493 4.317-8 8.941-8 3.995 0 7.387 2.619 8.559 6.229L18.672 11H24V6l-1.858 1.744z" />
      <Path d="M18 12c0-2.205-1.794-4-4-4h-2v8h2c2.206 0 4-1.794 4-4zm-4 2v-4c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2zM9 14H6v2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6v2h3v1H6v2h3v1z" />
      <Path d="M12 21c-3.74 0-6.952-2.294-8.31-5.548L6 13H0v6.37l2.22-2.357C4.047 20.562 7.741 23 12 23c5.728 0 10.442-4.402 10.949-10h-2.008c-.5 4.493-4.317 8-8.941 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
