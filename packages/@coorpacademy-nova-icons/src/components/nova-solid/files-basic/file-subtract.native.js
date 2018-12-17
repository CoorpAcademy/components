import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 15.422V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h13.422A4.979 4.979 0 0 1 15 20a4.996 4.996 0 0 1 3-4.578zM9 15H3v-2h6v2zm3-4H3V9h9v2zm0-5V1l5 5h-5zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
