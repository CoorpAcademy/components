import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={16} cy={19} r={2} />
      <Path d="M2 18a1 1 0 0 0 1 1h1c0-.771.3-1.469.779-2H3a1 1 0 0 0-1 1zM10 19h3c0-.771.3-1.469.779-2H9.221c.479.531.779 1.229.779 2zM21 17h-2.779c.479.531.779 1.229.779 2h2a1 1 0 1 0 0-2z" />
      <Circle cx={7} cy={19} r={2} />
      <Path d="M22 12a4 4 0 0 0-4-4h-4V6h-4v2H6a4 4 0 0 0 0 8h12a4 4 0 0 0 4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
