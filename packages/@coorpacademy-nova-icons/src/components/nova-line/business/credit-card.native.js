import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 4H4c-1.104 0-2 .898-2 2v12c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.102-.896-2-2-2zm0 2l-.001 3H4V6h16zM4 18v-7h15.999l-.002 7H4z" />
      <Path d="M15 12h4v2h-4zM5 12h7v2H5zM5 15h5v2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
