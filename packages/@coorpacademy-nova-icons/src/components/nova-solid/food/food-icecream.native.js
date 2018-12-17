import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M11.071 21.372c.153.379.521.628.929.628s.776-.249.929-.628L16.678 12H7.322l3.749 9.372zM12 2a6 6 0 0 0-6 6v1a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0V8a6 6 0 0 0-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
