import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 5.07V4.001a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6c0-4.078 3.055-7.438 7-7.931z" />
      <Path d="M10.069 14.001H2v-12h16v3c.691 0 1.359.098 2 .263V2.001c0-1.102-.896-2-2-2H2c-1.104 0-2 .898-2 2v12c0 1.102.896 2 2 2h8.588a7.91 7.91 0 0 1-.519-2z" />
      <Circle cx={18} cy={13.001} r={2} />
      <Path d="M24 13.001c0-3.309-2.691-6-6-6s-6 2.691-6 6a5.994 5.994 0 0 0 2.703 5.008l-.693 4.851a1 1 0 0 0 1.545.973L18 22.203l2.445 1.63a.998.998 0 0 0 1.088.015c.334-.211.513-.598.457-.988l-.693-4.851A5.994 5.994 0 0 0 24 13.001zm-6 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
