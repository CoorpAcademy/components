import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.042 4.001h-20a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2zM6.419 17.754L2.348 15.04l1.387-2.08 1.929 1.286 4.318-6.908 2.12 1.325-5.683 9.091zM20.042 17h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"
    />
  </Svg>
);

export default SvgComponent;
