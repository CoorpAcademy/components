import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 3.003h6v6h-6zM17.063 12.354L14 13.503v-1.5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1.5l3.063 1.149c.516.193.937-.099.937-.649v-6c0-.55-.421-.842-.937-.649z" />
    </G>
  </Svg>
);

export default SvgComponent;
