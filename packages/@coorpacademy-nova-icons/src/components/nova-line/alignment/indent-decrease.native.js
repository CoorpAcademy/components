import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 3h18v2H4zM10 7h12v2H10zM10 11h12v2H10zM10 15h12v2H10zM4 19h18v2H4zM8 6l-6 6 6 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
