import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17 2.001H7c-1.103 0-2 .898-2 2v17a1 1 0 0 0 1.554.832L12 18.204l5.445 3.63a1.006 1.006 0 0 0 1.027.05c.325-.175.528-.513.528-.883v-17c0-1.102-.896-2-2-2zm-6 11.768L7.116 9.885l1.768-1.768L11 10.234l4.116-4.116 1.768 1.768L11 13.769z"
    />
  </Svg>
);

export default SvgComponent;
