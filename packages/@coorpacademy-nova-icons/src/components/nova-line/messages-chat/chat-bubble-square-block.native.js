import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 13.998V18H7.665l-2.667 2v-2h-3V9h8V7h-8c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-4.003l-2 .001z" />
      <Path d="M17.998 0c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.424.215 2.019.566l-5.452 5.452A3.944 3.944 0 0 1 13.998 6c0-2.205 1.794-4 4-4zm0 8a3.959 3.959 0 0 1-2.019-.566l5.452-5.453c.352.596.567 1.28.567 2.02a4.004 4.004 0 0 1-4 3.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
