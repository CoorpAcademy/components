import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10c.691 0 1.359.098 2 .263V6H0v8c0 1.102.896 2 2 2h8.262c.89-3.448 4.011-6 7.738-6zm-5-2h4v2h-4V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2zM20 2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v2h20V2z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.76A5.939 5.939 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
