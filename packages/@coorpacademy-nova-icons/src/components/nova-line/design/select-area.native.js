import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 2h2v2H2zM5 2h2v2H5zM8 2h2v2H8zM11 2h2v2h-2zM20 2h2v2h-2zM14 2h2v2h-2zM17 2h2v2h-2zM17 20h2v2h-2zM20 11h2v2h-2zM2 11h2v2H2zM2 8h2v2H2zM2 5h2v2H2zM20 8h2v2h-2zM20 5h2v2h-2zM2 14h2v2H2zM2 20h2v2H2zM5 20h2v2H5zM8 20h2v2H8zM11 20h2v2h-2zM14 20h2v2h-2zM20 20h2v2h-2zM20 14h2v2h-2zM2 17h2v2H2zM20 17h2v2h-2zM17 7H7v10h10V7zm-2 8H9V9h6v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
