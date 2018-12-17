import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={12} cy={2} r={1} />
      <Circle cx={10} cy={4.5} r={1} />
      <Circle cx={14} cy={4.5} r={1} />
      <Circle cx={12} cy={7} r={1} />
      <Circle cx={8} cy={7} r={1} />
      <Circle cx={16} cy={7} r={1} />
      <Path d="M18.618 9H5.382L2 15.764V21h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236L18.618 9zm-12 2h10.764l2 4H4.618l2-4zM15 19H9v-2h6v2zM4 17h3v2H4v-2zm13 2v-2h3v2h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
