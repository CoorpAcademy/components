import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.001 10.001h.997v4h-.997z" />
      <Path d="M12 1.001c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm-3 15H7v-3H6v3H4v-8h2v3h1v-3h2v8zm6-2c0 1.102-.896 2-2 2h-1c-1.104 0-2-.897-2-2v-4c0-1.102.896-2 2-2h1c1.104 0 2 .898 2 2v4zm4-4v6h-2v-6h-1v-2h4v2h-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
