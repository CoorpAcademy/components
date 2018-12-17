import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 10.75H5.438a.439.439 0 0 0 0 .876h.875c1.207 0 2.188.981 2.188 2.188S7.519 16 6.312 16H3.25v-1.75h3.062a.438.438 0 1 0 0-.876h-.874a2.19 2.19 0 0 1-2.188-2.188A2.19 2.19 0 0 1 5.438 9H8.5v1.75zM12.893 16h-1.8L9.375 9h1.75l.862 3.414L12.825 9h1.8l-1.75 6.931.018.069zm7.857-5.25h-3.5v3.5H19v-.875h-.875v-1.75h2.625v2.625c0 .965-.785 1.75-1.75 1.75h-1.75c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h3.5v1.75z"
    />
  </Svg>
);

export default SvgComponent;
