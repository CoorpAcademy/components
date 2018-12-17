import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6h17.999v4.002H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M18 11.994c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.216 2.019.566l-5.452 5.453A3.947 3.947 0 0 1 14 17.994c0-2.204 1.794-4 4-4zm0 8c-.74 0-1.424-.215-2.019-.567l5.452-5.452c.352.595.567 1.279.567 2.019 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
