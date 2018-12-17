import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M9.25 7.25h1.25V8.5H9.25z" />
      <Path d="M21 4H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8v8h2v-8h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.75 7.25H4.562a.312.312 0 0 0 0 .624h.625A1.563 1.563 0 0 1 5.188 11H3V9.75h2.188c.171 0 .312-.14.312-.312a.313.313 0 0 0-.312-.312h-.626a1.564 1.564 0 0 1 0-3.126H6.75v1.25zm2.5 2.5V11H8V6.625C8 6.279 8.28 6 8.625 6h2.5c.345 0 .625.279.625.625V11H10.5V9.75H9.25zM16.125 11H13V6h1.25v3.75h1.875V11zm4.625-3.75h-2.5v.625h1.875v1.25H18.25v.625h2.5V11h-3.125a.625.625 0 0 1-.625-.625v-3.75c0-.346.28-.625.625-.625h3.125v1.25z" />
    </G>
  </Svg>
);

export default SvgComponent;
