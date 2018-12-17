import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.5 20a1.5 1.5 0 0 0 1.5-1.5V15h-1.5v2a1.5 1.5 0 0 0 0 3z" />
      <Path d="M14 22H2V11h5V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-5h-2v5z" />
      <Path d="M16 0c-3.86 0-7 3.141-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7c0-3.859-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Path d="M17 3h-2v5h4V6h-2zM5.5 14.825V18A1.5 1.5 0 1 0 7 19.5v-4.131l2-.651V13.14l-2.982.973a.748.748 0 0 0-.518.712z" />
    </G>
  </Svg>
);

export default SvgComponent;
