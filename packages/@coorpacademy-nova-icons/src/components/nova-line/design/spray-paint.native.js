import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M7 6h3v3H7z" />
      <Circle cx={20} cy={3} r={1} />
      <Circle cx={17} cy={5} r={1} />
      <Circle cx={20} cy={7} r={1} />
      <Circle cx={14} cy={7} r={1} />
      <Circle cx={17} cy={9} r={1} />
      <Circle cx={20} cy={11} r={1} />
      <Path d="M4 21c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2V10H4v11zm2-9h5l.001 9H6v-9z" />
      <Path d="M7 18h3v2H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
