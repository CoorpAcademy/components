import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 2c-1.594 0-3.071.837-4 2.08C11.071 2.837 9.594 2 8 2 4.294 2 2 5.633 2 9c0 5.335 8.425 12.042 9.386 12.79a.999.999 0 0 0 1.228 0C13.575 21.042 22 14.335 22 9c0-3.367-2.294-7-6-7zm-4 17.718C9.301 17.492 4 12.416 4 9c0-2.404 1.529-5 4-5 1.689 0 3 1.613 3 3a1 1 0 1 0 2 0c0-1.387 1.311-3 3-3 2.471 0 4 2.596 4 5 0 3.412-5.301 8.491-8 10.718z" />
      <Circle cx={12} cy={15} r={2} />
      <Path d="M10 11a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM12 12a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM15 10a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
