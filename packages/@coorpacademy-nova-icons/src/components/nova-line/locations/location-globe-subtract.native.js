import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931a7.962 7.962 0 0 1-1.351 4.451l1.661 1.113A9.949 9.949 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10c.364 0 .723-.02 1.077-.058l-.214-1.988c-.283.03-.571.046-.863.046zm2-10v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <Path d="M13 17h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
