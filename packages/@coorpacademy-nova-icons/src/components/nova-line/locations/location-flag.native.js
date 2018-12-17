import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M17 14.54v1.9c1.827.367 3 .928 3 1.56 0 1.106-3.581 2-8 2s-8-.894-8-2c0-.632 1.173-1.193 3-1.56v-1.9c-2.986.691-5 1.98-5 3.46 0 2.21 4.478 4 10 4s10-1.79 10-4c0-1.48-2.014-2.769-5-3.46z" />
      <Path d="M13 10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v15h2v-8zm0-6h6v4h-6V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
