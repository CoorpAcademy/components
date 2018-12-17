import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 13h2v-3h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v7zm2-7c0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2h-2V6zM18 14h-7v2h3v2c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2v-2h2c1.103 0 2 .897 2 2s-.897 2-2 2zM6 10h7V8h-3V6c0-2.206-1.794-4-4-4S2 3.794 2 6s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2v2H6c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2zM10 11H8v3H6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4v-7zm-2 7c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
