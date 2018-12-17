import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 4.234v9.532L16.944 9 9 4.234zm2 3.533L13.056 9 11 10.234V7.767z" />
      <Path d="M19 1H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V3c0-1.104-.897-2-2-2zm0 2l.001 12H5V3h14zM5 21v-4h14.001v4H5z" />
      <Path d="M10 18h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
