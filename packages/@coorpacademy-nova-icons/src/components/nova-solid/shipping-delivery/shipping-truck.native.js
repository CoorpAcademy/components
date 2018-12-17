import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Circle cx={17} cy={18} r={2} />
      <Path d="M8.965 15.173C8.976 15.115 9 15.061 9 15V8a1 1 0 0 0-1-1H6c-2.205 0-4 1.794-4 4v6a1 1 0 0 0 1 1h2c0-1.656 1.344-3 3-3 .34 0 .66.069.965.173zM7 12H4v-2h3v2z" />
      <Circle cx={8} cy={18} r={2} />
      <Path d="M20 4h-8c-1.104 0-2 .897-2 2v9.779c.609.549 1 1.336 1 2.221h3a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1V6c0-1.103-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
