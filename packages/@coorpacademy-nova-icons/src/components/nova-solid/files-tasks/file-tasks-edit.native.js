import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM8 20l1.027-3.214 2.121 2.121L8 20zm8.452-6.398l-3.889 3.89-2.122-2.121 3.89-3.889a1.5 1.5 0 1 1 2.121 2.12z" />
    </G>
  </Svg>
);

export default SvgComponent;
