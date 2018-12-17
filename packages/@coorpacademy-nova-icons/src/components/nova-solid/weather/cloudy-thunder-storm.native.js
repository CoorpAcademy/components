import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 3.005a6.964 6.964 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.647l-.817.575C9.678 7.459 8.393 7.005 7 7.005c-2.757 0-5 2.243-5 5s2.243 5 5 5h2.319L14 11.154v5.851h1c3.86 0 7-3.14 7-7 0-3.861-3.14-7-7-7z" />
      <Path d="M16 18.005h-3v-4l-4 5h3v4zM5.624 22.42l-1.248-.832 2-3 1.248.832zM16.623 22.42l-1.248-.832 2-3 1.248.832z" />
    </G>
  </Svg>
);

export default SvgComponent;
