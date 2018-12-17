import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M15.002 15.001h-8c-2.757 0-5-2.243-5-5s2.243-5 5-5c.533 0 1.061.086 1.563.253a6.962 6.962 0 0 1 6.438-4.253c3.859 0 6.998 3.141 6.998 7-.001 3.86-3.14 7-6.999 7zm-8-8c-1.654 0-3 1.346-3 3s1.346 3 3 3h8c2.756 0 4.998-2.243 4.998-5s-2.242-5-4.998-5a4.973 4.973 0 0 0-4.865 3.867 1 1 0 0 1-1.518.613 2.977 2.977 0 0 0-1.617-.48zM15 17.001H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11v-6zM19.122 23.38l-3.245-2.598 1.25-1.562 1.751 1.402 2.87-3.279 1.504 1.317z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
