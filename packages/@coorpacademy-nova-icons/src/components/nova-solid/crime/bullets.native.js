import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M7 4h7v6H7zM20 7c0-1.804-2.408-3-4-3h-1v6h1c1.592 0 4-1.196 4-3zM4 3h2v8H4zM4 17c0 1.804 2.408 3 4 3h1v-6H8c-1.592 0-4 1.196-4 3zM10 14h7v6h-7zM18 13h2v8h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
