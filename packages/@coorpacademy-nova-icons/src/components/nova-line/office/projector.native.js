import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 6h-4V3c0-1.102-.897-2-2-2h-3c-1.103 0-2 .898-2 2v3c0 1.103.897 2 2 2h9v7H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8c0-1.102-.897-2-2-2zm-9 0V3h3l.001 3H10zm9 15H5v-4h14v4z" />
      <Circle cx={13} cy={19} r={1} />
      <Circle cx={17} cy={19} r={1} />
      <Path d="M10 10h2v4h-2zM13.056 9.819l1.885-.667 1.333 3.77-1.886.667zM7.057 9.152l1.885.667-1.332 3.77-1.886-.666z" />
    </G>
  </Svg>
);

export default SvgComponent;
