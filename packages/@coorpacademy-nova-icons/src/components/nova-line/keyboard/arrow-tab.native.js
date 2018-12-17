import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.293 8.707L13.586 11H2v2h11.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707zM20 7h2v10h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
