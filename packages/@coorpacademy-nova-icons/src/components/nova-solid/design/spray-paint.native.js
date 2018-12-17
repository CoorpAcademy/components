import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M7 5h3v3H7zM4 21a2 2 0 0 0 1.999 2h5a2 2 0 0 0 2-2V10H4v11zm1.999-4h5v3h-5v-3z" />
      <Circle cx={14} cy={7} r={1} />
      <Circle cx={17} cy={5} r={1} />
      <Circle cx={20} cy={3} r={1} />
      <Circle cx={20} cy={7} r={1} />
      <Circle cx={17} cy={9} r={1} />
      <Circle cx={20} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
