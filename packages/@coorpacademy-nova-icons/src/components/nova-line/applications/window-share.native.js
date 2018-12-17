import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 0H6C4.897 0 4 .896 4 2v11h2V6h15.999l-.002 7H15v2h7c1.104 0 2-.897 2-2V2a2 2 0 0 0-2-2zM12 2v2h-2V2h2zM6 2h2v2H6V2zm8 2V2h8v2h-8z" />
      <Path d="M20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.001 1.001 0 0 0-1.211-.501l-4.757 1.585A.996.996 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A1 1 0 0 0 20 17zM2 22v-6h2v6H2zm14.5-1H6v-4.28l4.494-1.497.289.58-1.49 1.49A.99.99 0 0 0 9.01 18H9v1h9l-1.5 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
