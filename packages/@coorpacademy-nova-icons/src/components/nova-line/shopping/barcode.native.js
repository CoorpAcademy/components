import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 4h2v16H2zM6 4h2v12H6zM9 4h2v12H9zM13 4h2v12h-2zM17 4h2v12h-2zM20 4h2v16h-2zM6 18h2v2H6zM9 18h2v2H9zM13 18h2v2h-2zM17 18h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
