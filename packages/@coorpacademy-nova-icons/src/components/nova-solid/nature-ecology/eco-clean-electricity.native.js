import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 12c0-2.523-3.64-7.79-5-9.76-.691 1.001-5 7.042-5 9.76a5.007 5.007 0 0 0 4 4.898c0 1.586-1.195 2.602-2.5 2.602A2.503 2.503 0 0 1 13 17V8c0-1.654-1.346-3-3-3V4a2 2 0 0 0-2-2H5v8h3a2 2 0 0 0 2-2V7c.551 0 1 .449 1 1v9c0 2.482 2.019 4.5 4.5 4.5 2.362 0 4.5-1.862 4.5-4.602A5.007 5.007 0 0 0 24 12zm-4 2.815V11h-2v3.815A2.993 2.993 0 0 1 16 12c0-1.092 1.561-3.942 3-6.191 1.44 2.248 3 5.098 3 6.191a2.992 2.992 0 0 1-2 2.815zM2 3h2v2H2zM2 7h2v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
