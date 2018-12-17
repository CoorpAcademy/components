import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M8 6h8v2H8zM8 9h8v2H8z" />
    <Path
      fill="currentColor"
      d="M20 13h-2V4H6v9H4V2h16zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z"
    />
  </Svg>
);

export default SvgComponent;
