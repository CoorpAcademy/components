import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <Path d="M12.293 14.707A.997.997 0 0 0 13 15h5v-2h-4.586L9.707 9.293A1.002 1.002 0 0 0 9 9H6v2h2.586l3.707 3.707zM14 9h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
