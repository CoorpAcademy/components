import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3V2zM20 2h-3v11l-2.5-2-2.5 2V2H9v20h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
