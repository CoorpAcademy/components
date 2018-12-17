import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.5 3.001h-9c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5zM2 7.001v10c0 1.103.897 2 2 2h1v-14H4c-1.103 0-2 .897-2 2zM20 5.001h-1v14h1c1.104 0 2-.897 2-2v-10c0-1.103-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
