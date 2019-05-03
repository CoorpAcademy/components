import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M0 12c0 5.515 4.486 10 10 10v-2a7.968 7.968 0 0 1-3-.588V16h3v-2H7v-4h3V8H7V4.59A7.95 7.95 0 0 1 10 4V2C4.486 2 0 6.486 0 12zm2.264 2A7.947 7.947 0 0 1 2 12c0-.691.098-1.359.264-2H5v4H2.264zm.818 2H5v2.235A8.04 8.04 0 0 1 3.082 16zM5 5.766V8H3.082A8.064 8.064 0 0 1 5 5.766zM21 2h-8c-1.104 0-2 .898-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4c0-1.102-.896-2-2-2zm0 2v2h-8V4h8zm0 4l.001 8H13V8h8zm-8 12v-2h8.002v2H13z" />
    </G>
  </Svg>
);

export default SvgComponent;
