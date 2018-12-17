import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM2 19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.003H2V19zm7-7.996h10v2H9v-2zm0 3.999h10v2H9v-2zm-3-4.002a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 15a1 1 0 1 1 0 2 1 1 0 1 1 0-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
