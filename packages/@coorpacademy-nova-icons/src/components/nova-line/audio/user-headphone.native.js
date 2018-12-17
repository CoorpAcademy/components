import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 10c0-2.205-1.794-4-4-4s-4 1.795-4 4c0 2.206 1.794 4 4 4s4-1.794 4-4zm-6 0c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2z" />
      <Path d="M20 8h-1.08c-.487-3.387-3.4-6-6.92-6S5.567 4.613 5.08 8H4c-1.103 0-2 .896-2 2v2c0 1.103.897 2 2 2h3V9c0-2.757 2.243-5 5-5s5 2.243 5 5v5h3c1.103 0 2-.897 2-2v-2c0-1.104-.897-2-2-2zM5 12H4v-2h1v2zm14 0v-2h1l.001 2H19zM12 15c-3.309 0-6 2.691-6 6v1h12v-1c0-3.309-2.691-6-6-6zm-3.874 5c.445-1.723 2.013-3 3.874-3s3.428 1.277 3.874 3H8.126z" />
    </G>
  </Svg>
);

export default SvgComponent;
