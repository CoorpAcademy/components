import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.394 14.211l2.491-.997a2.997 2.997 0 0 1 3.235.664l1 1c.328.327.563.712.708 1.121H19c.842 0 1.621.358 2.178.947A9.956 9.956 0 0 0 24 10c0-5.514-4.486-10-10-10S4 4.486 4 10c0 1.245.238 2.43.655 3.529a3 3 0 0 1 .739.682zM13 4h2v5h3v2h-4a1 1 0 0 1-1-1V4z" />
      <Path d="M19.924 18.617A1 1 0 0 0 19 18h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1.002 1.002 0 0 0-1.078-.222L5 16.521V23h11c.266 0 .52-.105.707-.293l3-3c.286-.287.371-.716.217-1.09zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
