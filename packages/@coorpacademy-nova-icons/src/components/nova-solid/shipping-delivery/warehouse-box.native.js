import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M22.515 7.143l-10-6a.996.996 0 0 0-1.029 0l-10 6A1 1 0 0 0 2 9v14h2V9h16v14h2V9a1.001 1.001 0 0 0 .515-1.857z" />
      <Path d="M9 10v6h6v-6h-2v2h-2v-2zM9 19H7v-2H5v6h6v-6H9zM17 19h-2v-2h-2v6h6v-6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
