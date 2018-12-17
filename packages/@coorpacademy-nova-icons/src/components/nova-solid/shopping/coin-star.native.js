import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      <Path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm4.285 13L12 14.165 7.715 17l1.994-4.585L6 9.286h4.285L12 5l1.715 4.286H18l-3.708 3.129L16.285 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
