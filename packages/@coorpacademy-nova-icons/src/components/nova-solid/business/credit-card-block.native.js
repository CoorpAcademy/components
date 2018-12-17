import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM18 10c.691 0 1.359.098 2 .263V6H0v8c0 1.102.896 2 2 2h8.262c.89-3.448 4.011-6 7.738-6zm-5-2h4v2h-4V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6 0 3.31 2.691 6 6 6s6-2.69 6-6c0-3.309-2.691-6-6-6zm-4 6c0-2.205 1.794-4 4-4 .739 0 1.425.217 2.02.567l-5.453 5.453A3.96 3.96 0 0 1 14 18zm4 4a3.95 3.95 0 0 1-2.019-.566l5.452-5.452c.352.594.567 1.279.567 2.018 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
