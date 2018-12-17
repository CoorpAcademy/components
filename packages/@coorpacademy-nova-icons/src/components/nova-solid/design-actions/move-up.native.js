import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.707 8.293L18 3.586l-4.707 4.707 1.414 1.414L17 7.414V13h2V7.414l2.293 2.293zM17 14h2v2h-2zM17 17h2v2h-2zM2 13h9v9H2zM2 11h9V2H2v9zm2-7h5v5H4V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
