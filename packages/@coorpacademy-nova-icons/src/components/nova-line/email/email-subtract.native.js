import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M14 8h6v2h-6zM14 12H2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.104 0 2-.897 2-2v-8c0-1.103-.896-2-2-2zm-2.12 2L8 16.771 4.12 14h7.76zM2 22v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L14 14.943 14.002 22H2z"
    />
  </Svg>
);

export default SvgComponent;
