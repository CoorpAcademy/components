import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <Path
      d="M19.76 20L14.963 2.732A1 1 0 0 0 14 2h-4a1 1 0 0 0-.963.732L4.24 20H2v2h20v-2h-2.24zm-3.742-6H7.982l.834-3h6.368l.834 3zM10.76 4h2.48l.833 3H9.927l.833-3zM6.315 20l.556-2h10.258l.556 2H6.315z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
