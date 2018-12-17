import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.229 12h.706l-.313.392 1.423 1.423 1.752-2.19A1.002 1.002 0 0 0 19.015 10h-4.786l2 2zM4.707 3.307L3.293 4.721l3.925 3.924-2.983 3.729A1.002 1.002 0 0 0 5.015 14h5v7a.998.998 0 0 0 1 1 1 1 0 0 0 .781-.375l3.733-4.667 3.764 3.764 1.414-1.414-16-16.001zM7.096 12l1.545-1.931L10.571 12H7.096zm4.919 6.149v-4.707l2.091 2.092-2.091 2.615zM11.155 6.925l.86-1.075v1.936l2 2V3a.998.998 0 0 0-.669-.943.998.998 0 0 0-1.112.318L9.732 5.502l1.423 1.423z" />
    </G>
  </Svg>
);

export default SvgComponent;
