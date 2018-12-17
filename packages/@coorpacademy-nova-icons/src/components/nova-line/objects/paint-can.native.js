import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 2C8.024 2 4 3.374 4 6v12c0 2.627 4.024 4.002 8 4.002s8-1.375 8-4.002V6c0-2.626-4.024-4-8-4zm0 2c3.723 0 6 1.295 6 2s-2.277 2-6 2-6-1.295-6-2 2.277-2 6-2zm0 16.002c-3.723 0-6-1.296-6-2.002V8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V18c0 .706-2.277 2.002-6 2.002z" />
      <Path d="M8 12v5s2 1 4 1 4-1 4-1v-5s-2 1-4 1-4-1-4-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
