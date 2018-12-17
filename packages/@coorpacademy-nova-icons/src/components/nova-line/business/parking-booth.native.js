import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C8.141 2 5 5.14 5 9c0 .082.011.164.03.243l2 8A1 1 0 0 0 8 18h3v4h2v-4h3c.459 0 .859-.312.971-.757l2-8C18.99 9.164 19 9.082 19 9c0-3.86-3.14-7-7-7zm3.22 14H8.781L7.002 8.882C7.064 6.179 9.282 4 12 4s4.937 2.179 4.999 4.882L15.22 16z" />
      <Path d="M12 5C9.795 5 8 6.794 8 9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1c0-2.206-1.794-4-4-4zm-1.731 3a2 2 0 0 1 3.462 0h-3.462zM10 13h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
