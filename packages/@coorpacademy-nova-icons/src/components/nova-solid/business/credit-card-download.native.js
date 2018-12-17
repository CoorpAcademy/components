import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v2h20V2zM20 12.08V6H0v8c0 1.102.896 2 2 2h10.683A6.992 6.992 0 0 1 19 12c.34 0 .672.033 1 .08zM8 13H3v-2h5v2zm2-3H3V8h7v2zm7 0h-4V8h4v2zM22.293 17.292L20 19.585v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.413l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
