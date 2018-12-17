import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17 2.001H7c-1.103 0-2 .898-2 2v17a1 1 0 0 0 1.554.832L12 18.203l5.445 3.63a1.006 1.006 0 0 0 1.027.05 1 1 0 0 0 .528-.882v-17c0-1.103-.896-2-2-2zm-2 12l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2 1 3z"
    />
  </Svg>
);

export default SvgComponent;
