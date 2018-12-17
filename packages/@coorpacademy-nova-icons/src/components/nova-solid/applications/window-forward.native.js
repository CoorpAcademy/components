import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 14.001V12c0-1.1.9-2 2-2h3V5.002H0V16c0 1.103.896 2 2 2h5.684A6.992 6.992 0 0 1 14 14.001h1zM20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM18.707 12.293l-1.414 1.413L19.586 16H15c-3.309 0-6 2.691-6 6v2h2v-2c0-2.205 1.795-4 4-4h4.586l-2.293 2.293 1.414 1.413L23.414 17l-4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
