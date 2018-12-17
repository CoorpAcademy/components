import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.001H.001z" />
    <Path
      d="M19.634 2.228a.998.998 0 0 0-.83-.207l-5 1a.998.998 0 0 0-.804.98h-1.838L5.317 2.052l-.633 1.899 2.88.96A6.999 6.999 0 0 0 4 11.001v7h2v-7a5.007 5.007 0 0 1 4-4.898v1.041c-1.72.447-3 1.999-3 3.857v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10c0-1.858-1.279-3.41-3-3.857V6.001h1a1 1 0 0 0 .804.981l5 1A1 1 0 0 0 20 7.001v-4c0-.3-.134-.584-.366-.773zM13 17.001h-1v-4h1v4zm0-6h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v1H9v-9c0-1.103.896-2 2-2s2 .897 2 2zm5-5.22l-3-.6v-.36l3-.601v1.561z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
