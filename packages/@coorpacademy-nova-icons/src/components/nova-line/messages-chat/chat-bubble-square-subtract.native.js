import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M15.998 2.994h6v2h-6zM2.998 24v-4h-1c-1.104 0-2-.897-2-2V9a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9c0 1.103-.896 2-2 2H8.332l-5.334 4zm-1-15v9h3v2l2.666-2h7.334V9h-13z"
    />
  </Svg>
);

export default SvgComponent;
