import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M1 15h2v2H1zM1 12h2v2H1zM1 9h2v2H1zM1 6h2v2H1zM1 18h2v2H1zM1 21h2v2H1zM4 21h2v2H4zM7 21h2v2H7zM10 21h2v2h-2zM13 21h2v2h-2zM16 21h2v2h-2zM5 2h17v17H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
