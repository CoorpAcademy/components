import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 12c2.205 0 4-1.794 4-4S8.205 4 6 4 2 5.794 2 8s1.795 4 4 4zm0-6c1.104 0 2 .898 2 2 0 1.103-.896 2-2 2s-2-.897-2-2c0-1.102.896-2 2-2zM16 14c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 6c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2z" />
      <Path d="M14 3v2h3.586L2.293 20.293l1.414 1.414L19 6.414V10h2V3z" />
    </G>
  </Svg>
);

export default SvgComponent;
