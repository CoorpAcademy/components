import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9s9-4.037 9-9c0-4.962-4.038-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7z" />
      <Path d="M12 8c-2.206 0-4 1.795-4 4 0 2.206 1.794 4 4 4s4-1.794 4-4c0-2.205-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
