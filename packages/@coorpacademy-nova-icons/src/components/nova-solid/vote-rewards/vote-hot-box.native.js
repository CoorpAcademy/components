import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.001 10.001h.997v4h-.997z" />
      <Path d="M20 4.002H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-12c0-1.103-.896-2-2-2zM9 16.001H7v-3H6v3H4v-8h2v3h1v-3h2v8zm6-1.999c0 1.102-.896 2-2 2h-1c-1.104 0-2-.897-2-2v-4c0-1.102.896-2 2-2h1c1.104 0 2 .898 2 2v4zm5-4h-1v6h-2v-6h-1v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
