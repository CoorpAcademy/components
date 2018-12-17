import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1c-2.51 0-4.74 1.31-5.979 3.357.966.457 1.996 1.263 2.971 2.647l-.817.576C9.678 5.454 8.393 5 7 5c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.859 0 7-3.14 7-7 0-3.859-3.141-7-7-7zM20 23H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM5 21h14v-2H5v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
