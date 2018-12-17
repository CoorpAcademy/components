import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.007 8l1.493 4H17l-3 1.997L15.5 18 12 15.502 8.5 18l1.5-4.003L7 12h3.5z" />
      <Path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <Path d="M15 3H8V1H6v6h2V5h7z" />
    </G>
  </Svg>
);

export default SvgComponent;
