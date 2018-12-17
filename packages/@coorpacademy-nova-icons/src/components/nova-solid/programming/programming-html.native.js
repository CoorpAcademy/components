import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M.001 18c0 1.103.897 2 2 2h9v2h-4v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1h-24v1zM24 12V4c0-1.102-.897-2-2-2H2C.897 2 0 2.898 0 4v1.999h2v3h2v-3h8v1a1 1 0 0 1 1-1c.57 0 .333.045 2 2.468 1.667-2.423 1.43-2.468 2-2.468a1 1 0 0 1 1 1v7h-2v-3.968l-.293.439a.85.85 0 0 1-1.414.001L14 10.032V14h-2V8h-2v6H8V8H6v6H4v-3H2v3H0v2h24v-2h-5V6h2v6h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
