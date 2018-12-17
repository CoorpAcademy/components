import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M20 5H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2v2h2v-2h12v2h2v-2c1.104 0 2-.897 2-2V7c0-1.103-.896-2-2-2zm-5 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5zm3 1a1 1 0 1 1-.002-1.998A1 1 0 0 1 18 15zm1-4h-2V8h2v3z"
    />
  </Svg>
);

export default SvgComponent;
