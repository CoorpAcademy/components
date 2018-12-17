import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 16.776V8.001a4.982 4.982 0 0 1-1.867-.786L3 2.926v18.295l6.428-3.844A5.027 5.027 0 0 1 11 16.776zM13 16.776V8.001a4.982 4.982 0 0 0 1.867-.786L21 2.926v18.295l-6.428-3.844A5.027 5.027 0 0 0 13 16.776zM13.543 19.092a2.998 2.998 0 0 0-3.087.001l-6.243 3.745c.242.104.508.162.787.162h14c.279 0 .545-.058.787-.162l-6.244-3.746zM10.279 5.576a3.01 3.01 0 0 0 3.441 0l6.2-4.342A1.978 1.978 0 0 0 19 1H5c-.334 0-.644.09-.921.234l6.2 4.342z" />
    </G>
  </Svg>
);

export default SvgComponent;
