import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 14l2.5-4 3.5 1.5 4-1.5-3.5 4-3.5-1.5z" />
      <Path d="M20.001 4H15a2 2 0 0 0-2 2v3.369h2V8h5v8h-5v-1h-2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6c0-1.106-.895-2-1.999-2zM9 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3H9v1H4V8h5v1.369h2V6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
