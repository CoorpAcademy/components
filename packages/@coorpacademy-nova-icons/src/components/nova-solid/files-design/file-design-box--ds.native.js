import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.688 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.786-1.75-1.75-1.75z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.062 15.125a.875.875 0 0 1-.874.875h-3.5v-1.75h2.625v-.875H3.688v-1.75h2.625v-.875H3.688V9h3.5c.482 0 .874.392.874.875v5.25zm2.626.875h-1.75V9h1.75c1.93 0 3.5 1.57 3.5 3.5 0 1.931-1.571 3.5-3.5 3.5zm9.624-5.25H17.25a.439.439 0 0 0 0 .876h.875c1.206 0 2.188.981 2.188 2.188S19.331 16 18.125 16h-3.062v-1.75h3.062a.439.439 0 0 0 0-.876h-.875a2.19 2.19 0 0 1-2.188-2.188A2.19 2.19 0 0 1 17.25 9h3.062v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
