import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <Path d="M12 18c3.309 0 6-2.691 6-6s-2.691-6-6-6v2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4H6c0 3.309 2.691 6 6 6z" />
      <Path d="M11.293 12.707l1.414-1.414-3.5-3.5L11 6H6v5l1.793-1.793z" />
    </G>
  </Svg>
);

export default SvgComponent;
