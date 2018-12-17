import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 7h2v2h-2zM3 7h2v2H3zM3 11h2v2H3zM7 11h2v2H7zM11 11h2v2h-2zM11 15h2v2h-2zM15 11h2v2h-2zM3 15h2v2H3zM7 19h2v2H7zM11 19h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM19 7h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM3 19h2v2H3zM3 3h18v2H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
