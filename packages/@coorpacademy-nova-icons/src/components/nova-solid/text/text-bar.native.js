import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M15 4h2V2h-2c-1.2 0-2.266.543-3 1.382A3.979 3.979 0 0 0 9 2H7v2h2c1.103 0 2 .897 2 2v6H9v2h2v4c0 1.103-.897 2-2 2H7v2h2c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-4h2v-2h-2V6c0-1.103.897-2 2-2z"
    />
  </Svg>
);

export default SvgComponent;
