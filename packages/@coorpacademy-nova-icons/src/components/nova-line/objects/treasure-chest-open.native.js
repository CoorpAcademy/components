import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M20 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zM8 14h8v3H8v-3zm11 6H5v-6h1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4h1v6zM11 2h2v3h-2zM4.707 3.293l2 2-1.414 1.413-2-2zM19.292 3.293l1.414 1.413-2 2-1.413-1.413zM4 11.002h2c0-.551.449-1 1-1a.99.99 0 0 1 .647.249.998.998 0 0 0 1.578-.38C9.689 8.735 10.777 8.002 12 8.002s2.311.733 2.774 1.869a1 1 0 0 0 1.578.38.994.994 0 0 1 .647-.249c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3a2.95 2.95 0 0 0-.9.142c-.92-1.327-2.436-2.142-4.1-2.142S8.82 6.816 7.9 8.144a2.95 2.95 0 0 0-.9-.142c-1.654 0-3 1.346-3 3z" />
      <Circle cx={12} cy={15.5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
