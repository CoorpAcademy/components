import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M18 2H6c-1.104 0-2 .898-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm-.003 18H6V4h12l-.003 16z" />
      <Path d="M8 12h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h6v3h-2.279l-.771-2.316-1.898.633.56 1.683H9V7zM10 19c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      <Circle cx={15} cy={15} r={1} />
      <Circle cx={15} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
