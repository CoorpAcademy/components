import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M19 12H3a1 1 0 0 0-1 1c.001 2.13 1.828 5.215 4.564 6.816l-.41.65A1 1 0 0 0 7 22h8a1 1 0 1 0 .846-1.534l-.41-.65C18.174 18.215 20.001 15.129 20 13a1 1 0 0 0-1-1zM20.895 6.553l-2-4a1 1 0 0 0-1.266-.481l-5 2a1 1 0 0 0-.523 1.376l2 4a1 1 0 0 0 1.266.481l5-2c.542-.218.784-.853.523-1.376zM9.683 5.05l.633 1.899-3 1-.633-1.899zM12.707 8.706l-2 2-1.413-1.413 2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
