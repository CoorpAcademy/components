import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M6 7v1H2v2h4v1a1 1 0 0 0 1 1h2V6H7a1 1 0 0 0-1 1zM10 4.278v9.443c.295.173.635.279 1 .279h1V4h-1a1.98 1.98 0 0 0-1 .278zM22 9c0-2.757-2.243-5-5-5h-4v12a1 1 0 0 0 1 1h3l.674 2H16v2h3a.997.997 0 0 0 .961-1.274l-1.688-5.91C20.411 13.248 22 11.314 22 9zm-6.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
