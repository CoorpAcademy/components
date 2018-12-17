import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 8.465V4H8v5.535l3.446 2.297 1.109-1.664zM24 16.286h-4.286L18 12l-1.715 4.286H12l3.708 3.13L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 .341-.033.673-.08 1h2.021c.037-.329.059-.662.059-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a9.18 9.18 0 0 0 1-.058V15.92c-.327.047-.659.08-1 .08-3.859 0-7-3.14-7-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
