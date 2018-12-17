import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 0c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.215 2.02.566l-5.453 5.452A3.94 3.94 0 0 1 14 6c0-2.205 1.795-4 4-4zm0 8c-.74 0-1.424-.215-2.02-.566l5.453-5.453A3.95 3.95 0 0 1 22 6c0 2.206-1.795 4-4 4zM14 12H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-1.103-.896-2-2-2zm-2.121 2L8 16.771 4.121 14h7.758zM2 22v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L14 14.943 14.002 22H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
