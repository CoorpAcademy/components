import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 10c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM21.895 15.553a.997.997 0 0 0-1.137-.522l-7.641 1.909-2.428-1.214 1.019-1.018a.999.999 0 0 0 0-1.414l-1-1a1.004 1.004 0 0 0-1.079-.223L5 13.923v7.085l7.876.985a1.02 1.02 0 0 0 .44-.044l9-3a1.002 1.002 0 0 0 .578-1.396l-.999-2zM3 13H1c-.552 0-1 .449-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7c0-.551-.448-1-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
