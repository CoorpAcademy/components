import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12} r={2} />
      <Path d="M21.414 5.414a2 2 0 1 0-2.828-2.828 1.992 1.992 0 0 0-.511 1.925l-1.033 1.034C15.604 4.57 13.868 4 12 4s-3.604.57-5.042 1.545L5.925 4.511a1.99 1.99 0 0 0-.511-1.925 2 2 0 1 0-2.828 2.828 1.992 1.992 0 0 0 1.925.512l.928.928A8.957 8.957 0 0 0 3 13v7a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0v-7c0-2.38-.931-4.537-2.439-6.147l.928-.928a1.987 1.987 0 0 0 1.925-.511zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
