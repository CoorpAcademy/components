import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.998 12a5 5 0 0 1-5-5c0-.323.037-.637.095-.943-.36-.035-.725-.057-1.095-.057-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9a8.206 8.206 0 0 0-1.047-3.984 4.957 4.957 0 0 1-2.953.984z" />
      <Path d="M13.998 6h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
