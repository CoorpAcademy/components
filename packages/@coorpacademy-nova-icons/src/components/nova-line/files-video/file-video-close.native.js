import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17l7-4-7-4z" />
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-2H2V2h10v4h4v8.004h2V4.586zM23.707 17.714L22.293 16.3 20 18.593 17.707 16.3l-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414L20 21.421l2.293 2.293 1.414-1.414-2.293-2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
