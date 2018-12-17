import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M15 8h-2v8h2l3-4zM7.183 10.728l-.365-1.455 4-1 .364 1.454zM7.183 13.728l-.365-1.455 4-1 .364 1.454zM7.183 16.729l-.364-1.456 4-1 .363 1.454z" />
    </G>
  </Svg>
);

export default SvgComponent;
