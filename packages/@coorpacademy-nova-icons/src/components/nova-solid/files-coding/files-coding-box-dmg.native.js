import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.002 16h-1.75V9h1.75c1.93 0 3.5 1.57 3.5 3.5S6.931 16 5.002 16zm9.624 0h-1.75v-3.234l-.147.22c-.325.487-1.131.487-1.456 0l-.147-.22V16h-1.75V9.875a.876.876 0 0 1 1.603-.486l1.022 1.535 1.022-1.535a.876.876 0 0 1 1.603.486V16zm6.124-5.25h-3.5v3.5H19v-.875h-.875v-1.75h2.625v2.625c0 .965-.785 1.75-1.75 1.75h-1.75c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
      <Path d="M5.002 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.786-1.75-1.75-1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
