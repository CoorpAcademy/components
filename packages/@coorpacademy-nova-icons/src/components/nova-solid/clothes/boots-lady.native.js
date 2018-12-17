import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M2.373 20c.408 1.055 1.201 2 2.627 2h7c.455 0 .854-.312.969-.752A5.34 5.34 0 0 1 13.532 20H2.373zM14.362 19A3.698 3.698 0 0 1 16 18.115V19h6V4a.996.996 0 0 0-.293-.707c-.177-.177-1.078-.931-3.707-1.198V7a2 2 0 0 1-4 0V2.095c-2.629.268-3.53 1.021-3.707 1.198-.215.215-.32.516-.287.817l.927 8.339-8.419 4.677A1.001 1.001 0 0 0 2 18c0 .291.029.637.096 1h12.266zM16 20v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
