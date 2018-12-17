import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.785-1.75-1.75-1.75zM13.75 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.785-1.75-1.75-1.75z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5 10.75h-.875v3.5H5V16H1.5v-1.75h.875v-3.5H1.5V9H5v1.75zm6.125 4.375a.874.874 0 0 1-1.602.485l-1.898-2.844V16h-1.75V9.875a.875.875 0 0 1 1.603-.486l1.898 2.845V9h1.75v6.125zM19 16h-1.75v-3.5c0 1.93-1.569 3.5-3.5 3.5H12V9h1.75c1.931 0 3.5 1.57 3.5 3.5V9H19c1.931 0 3.5 1.57 3.5 3.5S20.931 16 19 16z" />
    </G>
  </Svg>
);

export default SvgComponent;
