import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M12 3c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
      <Path d="M13 11.697l-2.168-3.252A1 1 0 0 0 9 9v7h2v-3.697l2.168 3.252A1 1 0 0 0 15 15V8h-2v3.697z" />
    </G>
  </Svg>
);

export default SvgComponent;
