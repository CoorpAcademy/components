import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2.076 10.383c-.155.373-.52.617-.924.617h-2v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4H7a1.002 1.002 0 0 1-.707-1.707l5-5a.999.999 0 0 1 1.414 0l5 5a1 1 0 0 1 .217 1.09z"
    />
  </Svg>
);

export default SvgComponent;
