import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-13.5 4.75H5.876a.875.875 0 0 0-.875.875v1.75c0 .483.392.875.875.875h2.625V16H5.876a2.628 2.628 0 0 1-2.625-2.625v-1.75A2.628 2.628 0 0 1 5.876 9h2.625v1.75zm6.125 0h-3.062a.437.437 0 1 0 0 .876h.875c1.207 0 2.188.981 2.188 2.188S13.645 16 12.439 16H9.376v-1.75h3.062a.438.438 0 1 0 0-.876h-.875a2.19 2.19 0 0 1-2.188-2.188A2.192 2.192 0 0 1 11.564 9h3.062v1.75zM19.019 16h-1.8l-1.718-7h1.75l.862 3.413L18.951 9h1.8l-1.75 6.929.018.071z"
    />
  </Svg>
);

export default SvgComponent;
