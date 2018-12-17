import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-7.064 15S8 17.634 8 15.127c0-2.381 3.181-3.413 4.064-.288.882-3.125 3.936-2.093 3.936.288 0 2.703-3.726 4.676-4.064 4.873z" />
    </G>
  </Svg>
);

export default SvgComponent;
