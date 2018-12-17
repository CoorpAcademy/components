import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M15 13c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.74 0 1.424-.215 2.019-.567l2.274 2.274 1.414-1.414-2.274-2.275A3.94 3.94 0 0 0 15 13zm-6 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
