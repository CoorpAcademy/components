import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.963 17.445L15 13h.579a.999.999 0 0 0 .819-1.573L14 8a.783.783 0 0 0 .64-1.229L12 3 9.36 6.772A.78.78 0 0 0 10 8l-2.398 3.427A1 1 0 0 0 8.421 13H9l-2.963 4.445A1.002 1.002 0 0 0 6.869 19h10.263c.369 0 .708-.203.882-.527a1.004 1.004 0 0 0-.051-1.028zM11 20h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
