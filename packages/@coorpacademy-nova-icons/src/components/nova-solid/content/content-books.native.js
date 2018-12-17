import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2v20h6V2H9zm3 17a1.001 1.001 0 1 1 .002-1.998A1.001 1.001 0 0 1 12 19zm1-3h-2V5h2v11zM2 2v20h6V2H2zm3 17a1.001 1.001 0 1 1 .002-1.998A1.001 1.001 0 0 1 5 19zm1-3H4V5h2v11zM16 2v20h6V2h-6zm3 17a1.001 1.001 0 1 1 .002-1.998A1.001 1.001 0 0 1 19 19zm1-3h-2V5h2v11z" />
    </G>
  </Svg>
);

export default SvgComponent;
