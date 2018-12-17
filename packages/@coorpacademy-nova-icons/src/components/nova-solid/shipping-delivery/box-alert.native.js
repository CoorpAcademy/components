import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM20 8H0v11a1 1 0 0 0 1 1h17v-6.003c0-1.1.9-2 2-2V8zM20 13.998h2v6h-2z" />
      <Circle cx={21} cy={21.998} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
