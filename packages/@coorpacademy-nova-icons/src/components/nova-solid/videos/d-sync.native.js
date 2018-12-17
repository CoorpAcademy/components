import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.142 7.748C20.475 3.79 16.557 1.005 12 1.005c-5.728 0-10.442 4.402-10.949 10h2.008c.5-4.493 4.317-8 8.941-8 3.995 0 7.387 2.619 8.559 6.229l-1.887 1.771H24v-5l-1.858 1.743z" />
      <Path d="M18 12.005c0-2.205-1.794-4-4-4h-2v8h2c2.206 0 4-1.794 4-4zm-4 2v-4c1.103 0 2 .897 2 2 0 1.102-.897 2-2 2zM9 14.005H6v2h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6v2h3v1H6v2h3v1z" />
      <Path d="M12 21.005c-3.74 0-6.952-2.294-8.31-5.548L6 13.005H0v6.37l2.22-2.357c1.827 3.549 5.52 5.987 9.78 5.987 5.728 0 10.442-4.402 10.949-10h-2.008c-.5 4.493-4.317 8-8.941 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
