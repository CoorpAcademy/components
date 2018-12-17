import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.375 10.756v3.5c.965 0 1.75-.785 1.75-1.75s-.785-1.75-1.75-1.75z" />
      <Path d="M22 6.006H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-12.625 10h-1.75v-3.235l-.147.22c-.325.487-1.131.487-1.456 0l-.147-.22v3.235h-1.75V9.881a.874.874 0 0 1 1.603-.485l1.022 1.533 1.022-1.533a.874.874 0 1 1 1.603.485v6.125zm4.375-5.25h-.875v3.5h.875v1.75h-3.5v-1.75h.875v-3.5h-.875v-1.75h3.5v1.75zm2.625 5.25h-1.75v-7h1.75c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
