import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
      <Path d="M12 7a1.001 1.001 0 0 1 0 2h-1v2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3h2c0-.552.449-1 1-1z" />
      <Circle cx={12} cy={13} r={1.25} />
    </G>
  </Svg>
);

export default SvgComponent;
