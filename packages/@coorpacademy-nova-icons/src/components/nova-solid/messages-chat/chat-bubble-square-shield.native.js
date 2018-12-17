import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.885 14.786c-1.15-.46-6.887-2.997-6.887-7.786h-8c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-3.168l-.113-.046z" />
      <Path d="M11.998 0v7c0 3.812 3.797 5.579 5.804 5.981l.196.039.196-.039c2.007-.401 5.804-2.168 5.804-5.981V0h-12zm9 7h-2v2h-2V7h-2V5h2V3h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
