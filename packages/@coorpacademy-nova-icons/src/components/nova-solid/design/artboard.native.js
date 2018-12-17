import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M6 6h12v12H6zM16 1h2v3h-2zM6 1h2v3H6zM16 20h2v3h-2zM6 20h2v3H6zM20 6h3v2h-3zM20 16h3v2h-3zM1 6h3v2H1zM1 16h3v2H1z" />
    </G>
  </Svg>
);

export default SvgComponent;
