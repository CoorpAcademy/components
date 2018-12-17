import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 10.999c2.205 0 4-1.793 4-3.999 0-2.206-1.795-4-4-4S3 4.794 3 7a4.004 4.004 0 0 0 4 3.999zM7 5a2 2 0 1 1-2 2c0-1.102.896-2 2-2zM17 13c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 6c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2zM3.293 19.293l16-16 1.413 1.414-16 16z" />
    </G>
  </Svg>
);

export default SvgComponent;
