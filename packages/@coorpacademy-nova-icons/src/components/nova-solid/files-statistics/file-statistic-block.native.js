import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 18.003v-2h2V7h2v9.002h1V12h2v4.001h.262c.17-.659.415-1.287.738-1.87V10h2v1.762a7.958 7.958 0 0 1 5-1.761V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h9.079a7.955 7.955 0 0 1-1.079-4l-7 .002zM12 1l5 5h-5V1z" />
      <Path d="M18 12.001c-3.309 0-6 2.691-6 6s2.691 6.001 6 6.001 6-2.692 6-6.001-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 18.001zm4 4.001a3.95 3.95 0 0 1-2.019-.567l5.452-5.453c.352.596.567 1.28.567 2.019a4.006 4.006 0 0 1-4 4.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
