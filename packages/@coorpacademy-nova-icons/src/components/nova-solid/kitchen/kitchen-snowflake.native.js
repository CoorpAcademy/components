import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <Path
      fill="currentColor"
      d="M22 7V5h-1.586l1.293-1.293-1.414-1.414L19 3.586V2h-2v3.586l-1 1V4a1.002 1.002 0 0 0-1.707-.707L12 5.586 9.707 3.293A1.001 1.001 0 0 0 8 4v2.586l-1-1V2H5v1.586L3.707 2.293 2.293 3.707 3.586 5H2v2h3.586l1 1H4a1 1 0 0 0-.707 1.707L5.586 12l-2.293 2.293A1.002 1.002 0 0 0 4 16h2.586l-1 1H2v2h1.586l-1.293 1.293 1.414 1.413L5 20.414V22h2v-3.586l1-1V20a1 1 0 0 0 1.707.706L12 18.414l2.293 2.292A.998.998 0 0 0 16 20v-2.586l1 1V22h2v-1.586l1.293 1.292 1.414-1.413L20.414 19H22v-2h-3.586l-1-1H20a.999.999 0 0 0 .707-1.707L18.414 12l2.293-2.293A1 1 0 0 0 20 8h-2.586l1-1H22zm-7 6h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"
    />
  </Svg>
);

export default SvgComponent;
