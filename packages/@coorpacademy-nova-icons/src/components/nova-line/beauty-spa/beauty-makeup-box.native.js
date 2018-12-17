import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M15 7.75L16 11h2l1-3.25c0-1-4-1-4 0z" />
      <Circle cx={7} cy={17} r={2} />
      <Circle cx={12} cy={17} r={2} />
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V4h16l.001 16H4z" />
      <Path d="M5 13h9V6H5v7zm2-5h5v3H7V8zM16 12h2v7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
