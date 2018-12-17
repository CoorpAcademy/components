import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a5.98 5.98 0 0 1 2-4.463V2a2 2 0 0 0-2-2zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM23.707 17.706l-1.414-1.413L20 18.586l-2.293-2.293-1.414 1.413L18.586 20l-2.293 2.293 1.414 1.413L20 21.414l2.293 2.292 1.414-1.413L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
