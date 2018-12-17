import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 10h-3.42l-3.712-6.497-1.736.992L16.277 10H7.723l3.146-5.504-1.737-.992L5.42 10H2v2h1.197l1.826 8.217A1 1 0 0 0 6 21h12c.469 0 .875-.326.977-.783L20.803 12H22v-2zm-4.803 9H6.803l-1.557-7h13.508l-1.557 7z" />
      <Path d="M11 13h2v5h-2zM14 13h2v5h-2zM8 13h2v5H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
