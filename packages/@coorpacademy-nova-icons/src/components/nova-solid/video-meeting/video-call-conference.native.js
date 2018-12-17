import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.754 18.423A2.993 2.993 0 0 0 23 16c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .998.495 1.877 1.246 2.423C16.921 19.075 16 20.426 16 22c0-1.574-.921-2.925-2.246-3.577A2.993 2.993 0 0 0 15 16c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .998.495 1.877 1.246 2.423C8.921 19.075 8 20.426 8 22c0-1.574-.921-2.925-2.246-3.577A2.993 2.993 0 0 0 7 16c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .998.495 1.877 1.246 2.423C.921 19.075 0 20.426 0 22v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.574-.921-2.925-2.246-3.577z" />
      <Circle cx={12} cy={5} r={2} />
      <Path d="M23 0H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-1 10h-7.144C14.502 8.755 13.477 8 12 8s-2.502.755-2.856 2H2V2h20v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
