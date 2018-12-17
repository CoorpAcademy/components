import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.707 5.707l-1.414-1.414L18 6.586l-2.293-2.293-1.414 1.414L16.586 8l-2.293 2.293 1.414 1.414L18 9.414l2.293 2.293 1.414-1.414L19.414 8zM14 12H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-1.103-.896-2-2-2zm-2.121 2L8 16.771 4.12 14h7.759zM2 22v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L14 14.943 14.002 22H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
