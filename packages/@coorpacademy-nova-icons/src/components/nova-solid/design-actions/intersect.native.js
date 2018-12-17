import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 9V2H2v12h7V9zM15 10v5h-5v7h12V10z" />
    </G>
  </Svg>
);

export default SvgComponent;
