import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 12c-3.524 0-6.432-2.606-6.92-5.996-.027 0-.053-.004-.08-.004-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9a8.187 8.187 0 0 0-.738-3.381 6.972 6.972 0 0 1-2.262.381z" />
      <Path d="M22.705 5.292L17.998.585l-4.707 4.707 1.414 1.414 2.293-2.293V10h2V4.413l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
