import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.394 7.082L15.93 4.311C15.602 2.434 13.97 1 12 1S8.398 2.434 8.07 4.311L1.606 7.082A.996.996 0 0 0 1 8v2a1 1 0 0 0 1 1h1a2 2 0 0 0 4 0h3a2 2 0 0 0 4 0h3a2 2 0 0 0 4 0h1a1 1 0 0 0 1-1V8c0-.4-.238-.762-.606-.918zM12 3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zm9 6H3v-.341L9.205 6h5.59L21 8.659V9zM7.976 23.217l-1.952-.433 1.999-9 1.952.433zM16.024 23.218l-2-9.001 1.953-.434 2 9zM11 16h2v7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
