import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .006h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 3.999h5v-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5v-2H4v-16zM15 1.999h2v2h-2zM15 19.999h2v2h-2zM20 1.999h-1v2h1v1h2v-1c0-1.103-.896-2-2-2zM20 19.999h-1v2h1a2 2 0 0 0 2-2v-1h-2v1zM20 6.999h2v2h-2zM20 14.999h2v2h-2zM20 10.999h2v2h-2z" />
      <Path d="M13.293 8.706l1.293 1.293H11c-2.205 0-4 1.795-4 4h2a2 2 0 0 1 2-2h3.586l-1.293 1.293 1.414 1.414 3.707-3.707-3.707-3.707-1.414 1.414zM11 1.999h2v5h-2zM11 14.999h2v7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
