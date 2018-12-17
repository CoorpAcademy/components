import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931 0 .625-.072 1.246-.214 1.846l1.946.461C19.91 11.556 20 10.78 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10c.388 0 .778-.022 1.16-.066l-.23-1.987A8.177 8.177 0 0 1 10 18zm2-10v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <Path d="M20.293 13.293L16 17.586l-2.293-2.293-1.414 1.414L16 20.414l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
