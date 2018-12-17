import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M14 8h-4l-3 7 5 8 5-8-3-7zm-2 7a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 15zM15 7V3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4h6z" />
    </G>
  </Svg>
);

export default SvgComponent;
